import app from './app';

function startServer() {
   app.listen(3333, () => {
      console.log('Server started in port 3333 👷')
   })
}

startServer();
