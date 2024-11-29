import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); // This will load your environment variables from .env file

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
console.log(uri);
console.log(dbName);
  if (!uri || !dbName) {
    return res.status(500).json({ error: 'Database configuration is missing' });
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('messages');

    const result = await collection.insertOne({ message, createdAt: new Date() });
    res.status(200).json({ id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: `Failed to save message: ${error.message}` });
  } finally {
    await client.close();
  }
}
