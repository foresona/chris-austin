import { TinaNodeBackend, LocalBackendAuthProvider } from '@tinacms/datalayer'
import type { NextApiRequest, NextApiResponse } from 'next'
import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from 'tinacms-authjs'

import databaseClient from '../../../../tina/__generated__/databaseClient'

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true'

// Use LocalBackendAuthProvider for password-based authentication
// This uses the credentials from content/users/index.json
const handler = TinaNodeBackend({
  authProvider: LocalBackendAuthProvider(),
  databaseClient,
})

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Modify the request here if you need to
  return handler(req, res)
}
