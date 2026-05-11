import http from 'http';
import { spawn } from 'child_process';

async function test() {
    console.log("Starting server...");
    const server = spawn('node', ['dist/index.js'], {
        env: { ...process.env, TRANSPORT: 'http', PORT: '3001' },
        stdio: 'pipe'
    });

    server.stdout.on('data', (data) => console.log(`[STDOUT] ${data}`));
    server.stderr.on('data', (data) => console.error(`[STDERR] ${data}`));

    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log("Probing /mcp...");
    const options = {
        hostname: 'localhost',
        port: 3001,
        path: '/mcp',
        headers: {
            'Accept': 'text/event-stream'
        }
    };
    http.get(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        res.on('data', (chunk) => console.log(`BODY: ${chunk}`));
        
        server.kill();
        process.exit(0);
    }).on('error', (e) => {
        console.error(`ERROR: ${e.message}`);
        server.kill();
        process.exit(1);
    });
}

test();
