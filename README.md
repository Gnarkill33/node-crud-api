# CRUD API

---

## Endpoints

### `GET /users`

Returns all users.  
**Response:**

- `200 OK` — list of all users

---

### `GET /users/{userId}`

Fetches a specific user by ID.  
**Response:**

- `200 OK` — user record if found
- `400 Bad Request` — invalid `userId` (not UUID)
- `404 Not Found` — user not found

---

### `POST /users`

Creates a new user record.  
**Request body (JSON):**

```json
{
  "username": "John Doe",
  "age": 30,
  "hobbies": ["reading", "gaming"]
}
```

**Response:**

- `201 Created` — newly created record
- `400 Bad Request` — missing required fields

---

### `PUT /users/{userId}`

Updates an existing user record.  
**Response:**

- `200 OK` — updated record
- `400 Bad Request` — invalid UUID
- `404 Not Found` — user not found

---

### `DELETE /users/{userId}`

Deletes a user by ID.  
**Response:**

- `204 No Content` — record deleted
- `400 Bad Request` — invalid UUID
- `404 Not Found` — user not found

---

### Invalid Endpoints

Any non-existing endpoit (e.g., `/some-non/existing/resource`)  
**Response:**

- `404 Not Found` — with a message

---

### Server Errors

If an internal error occurs during request processing:  
**Response:**

- `500 Internal Server Error` — with a message

---

## Environment Variables

### Example `.env.example`

```bash
PORT=4000
```

---

## Scripts

| Command              | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `npm run start:dev`  | Starts the app in development mode using `ts-node-esm` |
| `npm run start:prod` | Builds and runs the production version                 |

---

## Installation & Usage

```bash
# Install dependencies
npm install

# Copy environment example and configure
cp .env.example .env

# Run in development
npm run start:dev

# Run in production
npm run start:prod
```

---

## Data Structure

Each user object has the following structure:

```json
{
  "id": "uuid",
  "username": "string",
  "age": "number",
  "hobbies": ["string"]
}
```
