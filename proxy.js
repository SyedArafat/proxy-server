const http = require('http');
const httpProxy = require('http-proxy');
const config = require('./config');

// Create a proxy server instance
const proxy = httpProxy.createProxyServer({ secure: false });

// Define the target URL of your backend server
const backendUrl =  config.backendUrl

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    // Add the Host header
    req.headers['Host'] = new URL(backendUrl).hostname;
    req.headers['host'] = new URL(backendUrl).hostname;

    if (req.method === 'OPTIONS') {

        // Respond to OPTIONS requests with CORS headers
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        let curlCommand = `curl -X ${req.method} ${backendUrl}${req.url} `;
        Object.keys(req.headers).forEach(key => {
            curlCommand += `-H "${key}: ${req.headers[key]}" `;
        });
        console.log('Equivalent curl command:', curlCommand);
        res.writeHead(200);
        res.end();
        return;
    }

    // Set CORS headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Log the curl command
    let curlCommand = `curl -X ${req.method} ${backendUrl}${req.url} `;
    Object.keys(req.headers).forEach(key => {
        curlCommand += `-H "${key}: ${req.headers[key]}" `;
    });
    // console.log('Equivalent curl command:', curlCommand);
    // Proxy the incoming request to the backend server
    proxy.web(req, res, { target: backendUrl });
});

// // Listen for incoming requests on port 3000 (or any other desired port)
server.listen(3001, () => {
    console.log('Proxy server is listening on port 3001');
});