// pages/api/upload.js

import nextConnect from 'next-connect';
import multer from 'multer';
import { MongoClient } from 'mongodb';

// Configure multer for file handling
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory
});

// Initialize the handler with nextConnect
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry, something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// Middleware to handle image uploads
apiRoute.use(upload.single('image'));

apiRoute.post(async (req, res) => {
  const { buffer, mimetype } = req.file; // Get buffer and mimetype from file
  const { message } = req.body; // Get the message from the request body

  // Connect to MongoDB
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('Speedcubing_Pictures');
    const collection = db.collection('images');

    // Create a MongoDB document for the image and message
    const newDocument = {
      imageBuffer: buffer,
      contentType: mimetype,
      message: message, // Save the message field
      createdAt: new Date(),
    };

    // Insert the document into MongoDB
    const result = await collection.insertOne(newDocument);

    // Create a base64 version of the image to send back to the client
    const base64Image = buffer.toString('base64');
    const imageSrc = `data:${mimetype};base64,${base64Image}`;

    res.status(200).json({
      message: 'Image and message uploaded successfully',
      id: result.insertedId,
      imageSrc,
    });
  } catch (error) {
    res.status(500).json({ error: `Failed to upload image and message: ${error.message}` });
  } finally {
    await client.close();
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow built-in bodyParser to handle file uploads
  },
};
