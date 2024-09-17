const http = require('http');

/**
 * HTTP server that " to any endpoint.
 * @module 4-http
 */

/**
 * Callback function that handles incoming HTTP requests.
 * @param {http.IncomingMessage} req The in
 */
const handleRequest = (req, res) => {
  // Set the response the response body will be plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
};

// Create a new HTTPt function as the callback
const app = http.createServer(handleRequest);

// Start listen on port 1245
app.listen(1245);

// Export the appy other modules
module.exports = app;
