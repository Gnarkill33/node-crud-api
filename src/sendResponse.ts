import { type StatusCode } from './types.ts';
import { CONTENT_TYPE } from './constants.ts';
import type { ServerResponse } from 'node:http';

export const sendResponse = (res: ServerResponse, statusCode: StatusCode, data: unknown) => {
  res.writeHead(statusCode, CONTENT_TYPE);
  res.end(JSON.stringify(data));
};
