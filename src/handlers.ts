import type { ServerResponse } from 'node:http';
import { validate as uuidValidate } from 'uuid';
import { sendResponse } from './sendResponse.ts';
import { Store } from './store.ts';

const store = new Store();

export const handleGetRequest = (res: ServerResponse, parsedUrl: string) => {
  if (parsedUrl === '/users') {
    sendResponse(res, 200, store.getAllUSers());
  } else if (parsedUrl.match(/^users\/[^\/]+$/)) {
    const userId = parsedUrl.split('/')[1];

    if (uuidValidate(userId)) {
      const user = store.getSpecificUser(userId);
      if (user) {
        sendResponse(res, 200, user);
      } else {
        sendResponse(res, 404, { message: 'User not found' });
      }
    } else {
      sendResponse(res, 400, { message: 'userId is invalid' });
    }
  }
};
