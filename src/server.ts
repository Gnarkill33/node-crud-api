import { createServer } from 'node:http';
import { URL } from 'node:url';
import { PORT } from './constants.ts';
import { handleGetRequest, handlePostRequest, handlePutRequest } from './handlers.ts';

const server = createServer((req, res) => {
  if (!req.url) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request\n');
    return;
  }

  const myUrl = new URL(req.url, `http://${req.headers.host}`);
  const parsedUrl = myUrl.pathname;

  if (req.method === 'GET') {
    handleGetRequest(res, parsedUrl);
  } else if (req.method === 'POST') {
    handlePostRequest(req, res, parsedUrl);
  } else if (req.method === 'PUT') {
    handlePutRequest(req, res, parsedUrl);
  }
});

server.listen(PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
