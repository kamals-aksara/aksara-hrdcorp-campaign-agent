import {CreateContext, MCPServer} from 'mcp-lib.js';

async function main() {
  const server = new MCPServer({
    name: "Askara HRDCorp Campaign Agent Server",
    version: "1.0.0",
  });

  server.addContext("CampaignContext", CreateContext({
    parameters: {},
    handler: () => {
      console.log("Hello from MCP Server!");
      return "Campaign Context Initialized";
    }
  }));

  await server.start();
}

main().catch(err => {
  console.error('Server failed: ' + err);
});
