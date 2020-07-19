import express from 'express';

const app = express();

app.get('/', (req, res) => {
   return res.json('olá mundo')
})

export default app;