
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import multer from 'multer';

const server = express();
server.use(cors());


server.listen(process.env.PORT,
             () => console.log(`Api online na porta ${process.env.PORT}`));