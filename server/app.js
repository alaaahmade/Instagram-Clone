import express, { json, urlencoded } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';

export const app = express();

app.set('port', process.env.PORT || 8080);
app.use(
  [
    urlencoded({ extended: false }),
    json(),
    compression(),
    cookieParser(),
    cors(),
  ],
);

app.get('/', (req, res) => {
  res.send('Hello World');
});
