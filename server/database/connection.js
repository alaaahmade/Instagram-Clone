/* eslint-disable no-console */
import mongoose from 'mongoose';
import { MONGO_URI } from '../config/index.js';

// export const db = async () => mongoose.connect(MONGO_URI);

export const initDataBase = async () => {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log(
      '\x1b[33m%s\x1b[0m',
      `server connected to the ${MONGO_URI} database`,
    );
  });
};
