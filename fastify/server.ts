// Copyright 2021-2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import { cors as connectCors } from "@connectrpc/connect";
import fastifyCors from "@fastify/cors";
import { readFileSync } from "fs";
import * as esbuild from "esbuild";
import routes from "./connect.js";

if (process.argv[1] === new URL(import.meta.url).pathname) {
    const PORT = parseInt(process.argv[2] ?? 3000);
    const server = await build();
    await server.listen({ host: "localhost", port: PORT });
    console.log(`The app is running on http://localhost:${PORT}`);
    console.log("Run `npm run client` for a terminal client.");
}

export async function build() {
    const server = fastify();

    // Options for configuring CORS. The @connectrpc/connect package exports
    // convenience variables for configuring a CORS setup.
    await server.register(fastifyCors, {
        // Reflects the request origin. This should only be used for development.
        // Production should explicitly specify an origin
        origin: true,
        methods: [...connectCors.allowedMethods],
        allowedHeaders: [...connectCors.allowedHeaders],
        exposedHeaders: [...connectCors.exposedHeaders],
    });

    await server.register(fastifyConnectPlugin, { routes });

    server.get("/", (_, reply) => {
        reply.type("text/html");
        reply.send(readFileSync("./www/index.html", "utf8"));
    });

    server.get("/app.css", (_, reply) => {
        reply.type("text/css");
        reply.send(readFileSync("./www/app.css", "utf8"));
    });

    server.get("/webclient.js", (_, reply) => {
        void esbuild
            .build({
                entryPoints: ["./webclient.ts"],
                bundle: true,
                write: false,
                globalName: "eliza",
            })
            .then((result) => {
                reply.type("application/javascript");
                reply.send(result.outputFiles[0].text);
            });
    });

    return server;
}
