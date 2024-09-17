const express = require('express');

/**
 * Creates an HTTP server using Express module.
 * @module
 */
const app = express();

const PORT = 1245;

/**
 * Sends "Hello Holberton School!" response for the root endpoint.
 * @name GET.
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * The HTTP server listening on port 1245.
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
