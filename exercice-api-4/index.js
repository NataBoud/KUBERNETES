import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: "API V1 - Bonjour !", status: "success" });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});