import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => (res.send('API para POST em carrinho.')));

export { app }