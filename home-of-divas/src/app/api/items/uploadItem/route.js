import nextConnect from 'next-connect';
import multer from 'multer';
import { promises as fs } from 'fs';
import path from 'path';
import { connectDB } from '@/ConnectDB/ConnectDB';
import { ItemModel } from '@/model/itemModel';

// Set up multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use original filename
    },
  }),
});

// Initialize next-connect handler
const handler = nextConnect({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end('Something went wrong!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
});

// Handle file upload
handler.use(upload.single('file')).post(async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // Extract other fields from request body
    const { name, price, category } = req.body;
    
    if (!name || !price || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Connect to the database
    await connectDB();

    // Create a new item
    const newItem = new ItemModel({
      name,
      price,
      category,
      image: `/uploads/${file.filename}`, // Use filename from multer
    });

    // Save the item
    const savedItem = await newItem.save();

    // Send response
    res.status(200).json({ message: 'File uploaded successfully', file: savedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'File upload failed' });
  }
});

export default handler;
