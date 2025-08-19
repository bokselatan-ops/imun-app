const express = require('express');
const bodyParser = require('body-parser');
const Mega = require('megajs'); // SDK resmi untuk server
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const MEGA_EMAIL = process.env.MEGA_EMAIL;       // Simpan di env
const MEGA_PASSWORD = process.env.MEGA_PASSWORD; // Simpan di env
const MEGA_FILE_URL = 'https://mega.nz/file/3CBzCbRZ#PDKttoa5XQ21IfdwVBp2SRxDiIoeKpkkkfxRU1y9ehU';

// Load data dari MEGA
app.get('/api/load', async (req, res) => {
  try {
    const storage = Mega({ email: MEGA_EMAIL, password: MEGA_PASSWORD });
    const file = storage.file(MEGA_FILE_URL);

    let data = '';
    file.download()
      .on('data', chunk => data += chunk.toString())
      .on('end', () => {
        res.json(JSON.parse(data));
      })
      .on('error', err => res.status(500).json({ error: err.message }));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Simpan data ke MEGA
app.post('/api/save', async (req, res) => {
  try {
    const data = req.body; // JSON dari frontend
    const storage = Mega({ email: MEGA_EMAIL, password: MEGA_PASSWORD });
    const file = storage.file(MEGA_FILE_URL);

    const buffer = Buffer.from(JSON.stringify(data, null, 2));

    file.upload(buffer, 'imunisasi_data.json', err => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Data berhasil disimpan ke MEGA' });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Server berjalan di port ${port}`));
