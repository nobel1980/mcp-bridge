import http from 'http';
const data = JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list' });
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/mcp',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/event-stream',
    'Content-Length': Buffer.byteLength(data)
  }
};
const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => console.log(JSON.stringify(JSON.parse(body), null, 2)));
});
req.on('error', (e) => console.error(e));
req.write(data);
req.end();
