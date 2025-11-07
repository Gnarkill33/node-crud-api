import dotenv from 'dotenv';

dotenv.config();

export const PORT = Number(process.env.PORT) || 3000;
export const HOSTNAME = process.env.HOSTNAME ?? '0.0.0.0';

export const CONTENT_TYPE: Record<string, string> = { 'Content-Type': 'application/json' };
