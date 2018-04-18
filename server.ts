import express from 'express';
import * as jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import setRoutes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;
const mongodb = mongoose.connect('mongodb://localhost:27017/typescriptserver');

console.log('Eccoci!!!!!!!!');

mongodb.then((db) => {
    console.log('Connected to Mongo!');

    setRoutes(app);

    app.listen(3000, /*'retex.it',*/ () => { console.log('Server Listening on port 3000'); })
}).catch((err: Error) => { console.error(err) });
