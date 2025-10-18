# Port Conflict Troubleshooting Guide

## Problem: "Tina Dev server is already in use. Datalayer server is busy on port 9000"

This error occurs when the TinaCMS datalayer server is already running on port 9000, usually from a previous session that wasn't properly terminated.

---

## Quick Fix

### Method 1: Use the Clean Ports Script (Recommended)

```bash
./scripts/clean-ports.sh
npm run dev
```

### Method 2: Manual Cleanup

```bash
# Kill all processes on TinaCMS ports
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:4001 | xargs kill -9 2>/dev/null
lsof -ti:9000 | xargs kill -9 2>/dev/null

# Kill any lingering processes
pkill -9 -f "tinacms dev"
pkill -9 -f "next dev"

# Wait for ports to be released
sleep 3

# Start the server
npm run dev
```

### Method 3: One-Line Command

```bash
lsof -ti:3000,4001,9000 | xargs kill -9 2>/dev/null; sleep 3; npm run dev
```

---

## Understanding the Ports

TinaCMS development setup uses multiple ports:

| Port | Service | Purpose |
|------|---------|---------|
| **3000** | Next.js Dev Server | Main web application |
| **4001** | Tina Vite Server | TinaCMS admin interface assets |
| **9000** | Tina Datalayer | GraphQL API and content indexing |

---

## Common Scenarios

### Scenario 1: Terminal Closed Without Stopping Server

**Problem**: You closed the terminal or VS Code without stopping the dev server (Ctrl+C).

**Solution**: Use the cleanup script or manual cleanup commands above.

### Scenario 2: Multiple Dev Servers Running

**Problem**: You accidentally started `npm run dev` multiple times.

**Solution**: 
```bash
# Kill all node processes related to this project
pkill -9 -f "business-web"

# Or use the cleanup script
./scripts/clean-ports.sh
```

### Scenario 3: Process Won't Die

**Problem**: Processes persist even after kill commands.

**Solution**:
```bash
# Find all node processes
ps aux | grep node

# Kill specific PIDs
kill -9 <PID1> <PID2> <PID3>

# Or nuclear option (kills all node processes - use with caution)
pkill -9 node
```

### Scenario 4: Different Port in Use (3001, etc.)

**Problem**: Server starts on port 3001 instead of 3000.

**Solution**: This means port 3000 is occupied. Clean it up:
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

---

## Diagnostic Commands

### Check Which Ports Are In Use

```bash
# Check specific ports
lsof -i:3000
lsof -i:4001
lsof -i:9000

# Check all TinaCMS ports at once
lsof -i:3000,4001,9000
```

### Find Process ID (PID)

```bash
# Get PID for a specific port
lsof -ti:9000

# Get detailed info about what's using the port
lsof -i:9000 | grep LISTEN
```

### Check All Node Processes

```bash
# List all node processes
ps aux | grep node | grep -v grep

# List processes related to this project
ps aux | grep business-web | grep -v grep
```

---

## Prevention Tips

### Always Stop the Server Properly

Instead of closing the terminal, use **Ctrl+C** to stop the server gracefully.

### Add npm Scripts for Cleanup

The `package.json` could include:

```json
{
  "scripts": {
    "dev": "tinacms dev -c \"next dev --turbopack\"",
    "dev:clean": "scripts/clean-ports.sh && npm run dev",
    "stop": "pkill -f 'tinacms dev' && pkill -f 'next dev'"
  }
}
```

Then you can run:
```bash
npm run dev:clean  # Clean and start
npm run stop       # Stop servers
```

### VS Code Terminal Settings

If you're using VS Code, ensure terminals are properly killed when closing:
1. Settings → Terminal → Integrate Local Echo
2. Terminal → Confirm Exit when there are active terminals

---

## Automation: Add to Package.json

Add this to your `package.json`:

```json
{
  "scripts": {
    "predev": "lsof -ti:3000,4001,9000 | xargs kill -9 2>/dev/null || true",
    "dev": "tinacms dev -c \"next dev --turbopack\"",
    "clean": "./scripts/clean-ports.sh"
  }
}
```

Now `npm run dev` will automatically clean ports before starting!

---

## Emergency: Nuclear Option

If nothing else works, restart all Node processes:

```bash
# WARNING: This kills ALL Node.js processes on your system
# Make sure you're not running other important Node apps
pkill -9 node

# Wait a moment
sleep 3

# Start fresh
npm run dev
```

---

## Troubleshooting Checklist

- [ ] Tried Ctrl+C to stop the server properly
- [ ] Ran the cleanup script: `./scripts/clean-ports.sh`
- [ ] Checked if ports are clear: `lsof -i:3000,4001,9000`
- [ ] Killed specific processes: `kill -9 <PID>`
- [ ] Restarted VS Code terminal
- [ ] Waited 3-5 seconds after killing processes
- [ ] Checked for other Node apps using the same ports
- [ ] Restarted computer (last resort)

---

## Still Having Issues?

### Check If Another App Is Using the Ports

```bash
# See what's actually running on each port
lsof -i:3000 -P -n
lsof -i:4001 -P -n
lsof -i:9000 -P -n
```

### Change the Port (Temporary Solution)

Edit `package.json` to use different ports:

```json
{
  "scripts": {
    "dev": "tinacms dev -c \"next dev --turbopack -p 3002\""
  }
}
```

Then access at `http://localhost:3002`

---

## Summary

**Most Common Solution**:
```bash
./scripts/clean-ports.sh && npm run dev
```

**Quick One-Liner**:
```bash
lsof -ti:3000,4001,9000 | xargs kill -9 2>/dev/null; sleep 3; npm run dev
```

**Always Remember**: Use **Ctrl+C** to stop the server instead of closing the terminal!
