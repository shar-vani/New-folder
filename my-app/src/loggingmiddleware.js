const axios = require('axios');

const TEST_SERVER_URL = 'http://localhost:3000/logs';

async function sendLog(entry) {
  try {
    await axios.post(TEST_SERVER_URL, entry);
  } catch (err) {
    console.error('Error sending log to test server:', err.message);
  }
}

function loggingMiddleware(packageName) {
  return (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
      (async () => {
        try {
          const duration = Date.now() - start;

          const log = {
            stack: (new Error()).stack || '',
            level: 'info',
            package: packageName,
            message: `${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`
          };

          await sendLog(log);
        } catch (error) {
          console.error('Logging middleware error:', error.message);
        }
      })();
    });

    next();
  };
}

module.exports = loggingMiddleware;
