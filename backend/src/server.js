import five from 'johnny-five';
import express from 'express';
import cors from 'cors'

const board = new five.Board();

board.on('ready',() => {
   const led = new five.Led(2);
   const lcd = new five.LCD({ 
      controller: "PCF8574AT"
   });

   function writeInLcd(line1,line2) {
      lcd.clear();
      lcd.print(line1);
      lcd.cursor(1,0).print(line2);
   };

   writeInLcd('API Starting', 'Wait please...');

   const app = express();
   app.use(express.json());
   app.use(cors())

   app.get('/turn-on/:id', (req, res) => {
      const {id} = req.params;
      
      led.stop().off();
      led.on();
            
      writeInLcd(`Led Port: ${id}`, 'Led Status: On')

      return res.json({message: 'success'});
   });
   
   app.get('/turn-off/:id', (req, res) => {
      const {id} = req.params;
      
      led.stop().off();
      
      writeInLcd(`Led Port: ${id}`, 'Led Status: Off')

      return res.json({message: 'success'});
   })
   
   app.get('/blink/:id', (req, res) => {
      const {id} = req.params;
      const {interval} = req.query;

      led.stop().off();
      led.blink(interval);

      writeInLcd(`Blink on port ${id}`,`Interval: ${interval}ms`)
      
      return res.json({message:'success'});
   })
   
   app.post('/lcd', (req, res) => {
      const {message} = req.body;
      
      writeInLcd('Message Received', message)
      
      return res.json({message:'success'})
   })

   app.listen(3333, () => {
      writeInLcd('API Online','API Port: 3333')

      console.log('Server Started in port 3333');
   });
});
