const express = require('express');
const bodyParser = require('body-parser');
const Mega = require('mega');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve frontend

const MEGA_FILE_URL = 'https://mega.nz/file/3CBzCbRZ#PDKttoa5XQ21IfdwVBp2SRxDiIoeKpkkkfxRU1y9ehU';

// Endpoint download data dari MEGA
app.post('/mega/load', (req, res) => {
    const { email, password } = req.body;

    Mega({ email, password }, (err, storage) => {
        if (err) return res.status(400).json({ error: err.message });

        storage.download({ link: MEGA_FILE_URL }, (err, file) => {
            if (err) return res.status(400).json({ error: err.message });

            let data = '';
            file.on('data', chunk => data += chunk.toString());
            file.on('end', () => {
                try {
                    res.json(JSON.parse(data));
                } catch (err) {
                    res.status(500).json({ error: 'File MEGA bukan JSON valid' });
                }
            });
        });
    });
});

// Endpoint upload data ke MEGA
app.post('/mega/save', (req, res) => {
    const { email, password, data } = req.body;

    Mega({ email, password }, (err, storage) => {
        if (err) return res.status(400).json({ error: err.message });

        const buffer = Buffer.from(JSON.stringify(data, null, 2));

        storage.upload({ link: MEGA_FILE_URL, name: 'imunisasi_data.json' }, buffer, (err) => {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ message: 'Data berhasil diupload ke MEGA' });
        });
    });
});

app.listen(port, () => console.log(`Server berjalan di port ${port}`));
