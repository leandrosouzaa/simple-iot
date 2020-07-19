import five from 'johnny-five'
import app from './app';

const board = new five.Board();


function startServer() {
   app.listen(3333, () => {
      console.log('Server started in port 3333 👷')
   })
}

board.on('ready', startServer);