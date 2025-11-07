import type { ServerResponse } from 'node:http';
import { sendResponse } from './sendResponse.ts';
import { Store } from './store.ts';

const store = new Store();

export const handleGetRequest = (res: ServerResponse, parsedUrl: string) => {
  if (parsedUrl === '/users') {
    sendResponse(res, 200, store.getAllUSers());
  }
};
