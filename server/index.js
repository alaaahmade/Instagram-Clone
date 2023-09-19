import { app } from './app.js';
import { initDataBase } from './database/index.js';

try {
  await initDataBase();
  app.listen(app.get('port'), () => {
    console.log(`server is running on http://localhost:${app.get('port')}`);
  });
} catch (err) {
  console.log('cannot connect to database');
}
