import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { handleClaim } from './api/claim';

dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL not set in .env file');
  process.exit(1);
}

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

app.post('/api/claim', async (req, res) => {
  try {
    const userId = req.body.userId;
    // Replace with actual database query logic
    // const result = await pool.query('SQL QUERY HERE', [userId]);
    res.status(200).send('Tokens claimed successfully for user ' + userId);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error while claiming tokens');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
