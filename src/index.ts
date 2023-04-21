import {createServer} from './utils/server';

createServer()
  .then((server) => {
    server.listen(3000, () => {
      console.info('server listening on port 3000');
    });
  })
  .catch((err) => {
    console.error(err);
  });
