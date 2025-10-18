#!/bin/bash

# TinaCMS Port Management Script
# Use this script to cleanly stop and restart the dev server

echo "🔍 Checking for running dev servers..."

# Function to kill process on a specific port
kill_port() {
    local port=$1
    local pids=$(lsof -ti:$port 2>/dev/null)
    
    if [ -n "$pids" ]; then
        echo "   Killing process on port $port (PID: $pids)"
        kill -9 $pids 2>/dev/null
        return 0
    else
        echo "   Port $port is free"
        return 1
    fi
}

# Kill all relevant ports
echo ""
echo "🧹 Cleaning up ports..."
kill_port 3000
kill_port 3001
kill_port 4001
kill_port 9000

# Also kill any lingering processes by name
echo ""
echo "🧹 Killing lingering processes..."
pkill -9 -f "tinacms dev" 2>/dev/null && echo "   Killed tinacms dev" || echo "   No tinacms dev process"
pkill -9 -f "next dev" 2>/dev/null && echo "   Killed next dev" || echo "   No next dev process"

# Wait for ports to be released
echo ""
echo "⏳ Waiting for ports to be released..."
sleep 3

# Verify all ports are clear
echo ""
echo "✅ Port status:"
for port in 3000 3001 4001 9000; do
    if lsof -i:$port >/dev/null 2>&1; then
        echo "   ❌ Port $port is still in use"
    else
        echo "   ✅ Port $port is free"
    fi
done

echo ""
echo "🚀 Ready to start the dev server!"
echo ""
echo "Run: npm run dev"
