// // pages/api/upload-image.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import FormData from 'form-data';
// import fs from 'fs';
// import axios from 'axios';

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Setze deinen API-Key in .env.local

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { file } = req.body;

//       // Erstelle FormData-Objekt
//       const form = new FormData();
//       form.append('file', fs.createReadStream(file.path)); // Pfad zur hochgeladenen Datei
//       form.append('purpose', 'fine-tune');

//       // Anfrage an OpenAI senden
//       const response = await axios.post('https://api.openai.com/v1/files', form, {
//         headers: {
//           ...form.getHeaders(),
//           Authorization: `Bearer ${OPENAI_API_KEY}`,
//         },
//       });

//       res.status(200).json({ fileId: response.data.id }); // Gib die file_id zurück
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Fehler beim Hochladen des Bildes' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// import express from 'express';
// import multer from 'multer';
// import fs from 'fs';
// import axios from 'axios';
// import FormData from 'form-data';

// const app = express();
// const port = 3000;
// const upload = multer({ dest: 'uploads/' });

// const OPENAI_API_KEY = 'your-openai-api-key';

// app.post('/api/upload-image', upload.single('image'), (req, res) => {
//   (async () => {
//   try {
//     const { file } = req;
//     if (!file) {
//       return res.status(400).json({ error: 'Kein Bild hochgeladen' });
//     }

//     // Erstelle FormData-Objekt
//     const form = new FormData();
//     form.append('file', fs.createReadStream(file.path)); // Pfad zur hochgeladenen Datei
//     form.append('purpose', 'fine-tune');

//     // Anfrage an OpenAI senden
//     const response = await axios.post('https://api.openai.com/v1/files', form, {
//       headers: {
//         ...form.getHeaders(),
//         Authorization: `Bearer ${OPENAI_API_KEY}`,
//       },
//     });

//     res.status(200).json({ fileId: response.data.id }); // Gib die file_id zurück
//   } catch (error) {
//     console.error(error);
//   }
//   })();
// });


// app.listen(port, () => {
//   console.log(`Server läuft auf http://localhost:${port}`);
// });