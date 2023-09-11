import { app } from './app';

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Running on http://localhost:${app.get('port')}`);
});
