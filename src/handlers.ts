import type { IncomingMessage, ServerResponse } from 'node:http';
import { validate as uuidValidate } from 'uuid';
import { sendResponse } from './sendResponse.ts';
import { Store } from './store.ts';

const store = new Store();

export const handleGetRequest = (res: ServerResponse, parsedUrl: string) => {
  if (parsedUrl === '/users') {
    sendResponse(res, 200, store.getAllUsers());
  } else if (parsedUrl.match(/^\/users\/[^\/]+$/)) {
    const userId = parsedUrl.split('/')[2];

    if (uuidValidate(userId)) {
      const user = store.getUserById(userId);
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

export const handlePostRequest = (req: IncomingMessage, res: ServerResponse, parsedUrl: string) => {
  if (parsedUrl === '/users') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const userData = JSON.parse(body);

        const requiredFields = ['username', 'age', 'hobbies'];
        const missingFields = requiredFields.filter((field) => !userData[field]);

        if (missingFields.length > 0) {
          return sendResponse(res, 400, { message: 'Missing required fields' });
        }

        const newUserWithId = store.createNewUser(userData);

        sendResponse(res, 201, newUserWithId);
      } catch (error) {
        sendResponse(res, 400, { message: 'Invalid JSON format' });
      }
    });
  }
};
