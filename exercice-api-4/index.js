import express from 'express';

const app = express();
const PORT = 3000;

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.json({
        message: "API V1 - Bonjour !",
        status: "success",
    });
});

apiRouter.get('/new-feature', (req, res) => {
    res.json({
        message: "Ceci est la nouvelle route de la V2 !",
        status: "updated"
    });
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});