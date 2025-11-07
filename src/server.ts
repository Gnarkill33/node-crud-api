import { createServer } from 'node:http';
import { PORT } from './types.ts';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

server.listen(PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
