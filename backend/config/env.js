import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envFilePath = path.resolve(__dirname, `../.env.${process.env.NODE_ENV || 'development'}.local`);

config({ path: envFilePath });

export const { PORT, 
    NODE_ENV, 
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_ENV,
    ARCJET_KEY,
    QSTASH_TOKEN,
    QSTASH_URL,
    SERVER_URL,
    EMAIL_PASSWORD,
    GOOGLE_CLIENT_ID
} = process.env; 