# Aksara HRDCorp Campaign Agent
## MCP Scaffold

This repo initializes an MCP (Model Context Protocol) project with a starter Server.

- `package.json` : Project dependencies and scripts
- `tsconfig.json` : TypeScript config
- `src/mcp-server.ts` : Starter MSP server
- `mcp.json` : MCP manifest/config

## Usage

### Development

Run the server in development mode:

``bash
node src/mcp-server.ts
``
To build:
`bash
tsc -t
s``

### Use in an Application
* import mthe library
* register context and handlers

## License
MIT License