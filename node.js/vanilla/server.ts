// Copyright 2021-2023 Buf Technologies, Inc.
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

import { connectNodeAdapter } from '@bufbuild/connect-node'
import routes from '../connect.js'
import * as esbuild from 'esbuild'
import http from 'http'
import { readFileSync } from 'fs'
import { stdout } from 'process'

// The adapter turns our RPC routes into as Node.js request handler.
const handler = connectNodeAdapter({
    routes,
    // If none of the RPC routes match, this handler is called.
    // We serve our web interface here:
    fallback(req, res) {
        switch (req.url) {
            case '/':
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(
                    readFileSync('../www/index-node.html', 'utf8'),
                    'utf8'
                )
                res.end()
                break
            case '/app.css':
                res.writeHead(200, { 'content-type': 'text/css' })
                res.write(readFileSync('../www/app.css', 'utf8'), 'utf8')
                res.end()
                break
            case '/webclient.js':
                void esbuild
                    .build({
                        entryPoints: ['../webclient.ts'],
                        bundle: true,
                        write: false,
                        globalName: 'eliza',
                    })
                    .then((result) => {
                        res.writeHead(200, {
                            'content-type': 'application/javascript',
                        })
                        res.write(result.outputFiles[0].text, 'utf8')
                        res.end()
                    })
                break
            default:
                res.writeHead(404)
                res.end()
        }
    },
})

http.createServer(handler).listen(3000, () => {
    stdout.write('The server is listening on http://localhost:3000\n')
    stdout.write('Run `npm run client` for a terminal client.\n')
})
