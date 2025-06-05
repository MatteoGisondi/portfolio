import dotenv from "dotenv";
import serveStatic from "serve-static-bun";

import { fileURLToPath } from "url";

dotenv.config();

interface ServerConfig {
    fetch: ReturnType<typeof serveStatic>;
    hostname: string;
    port: number;
    inspect: boolean;
}

const serverConfig: ServerConfig = {
    fetch: serveStatic("dist"),
    hostname: process.env.FRONTEND_HOST || "0.0.0.0",
    port: parseInt(process.env.FRONTEND_PORT || "3000"),
    inspect: true,
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const server = Bun.serve(serverConfig);
    console.log(`Server running at http://${server.hostname}:${server.port}`);
}
