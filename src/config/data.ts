import dotenv from 'dotenv';

dotenv.config();

export const RENDER_DATABASE_URL = process.env.RENDER_DATABASE_URL
export const PORT = process.env.PORT || 4000

