

import express, { json } from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use('/', routes);

app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*",function(_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html") , function(error){
        res.status(500).json(error);
    }) ;
})

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));