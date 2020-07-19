import five from 'johnny-five';
import express from 'express';

const board = new five.Board();

board.on('ready',() => {
   const app = express();
   app.use(express.json());

   const led = new five.Led(2);
   const lcd = new five.LCD({ 
      controller: "PCF8574AT"
   });
   
   app.get('/turn-on/:id', (req, res) => {
      const {id} = req.params
      

      
      
      led.stop().off();
      led.on();
      
      lcd.clear();
      lcd.print(`Led Port: ${id}`)
      lcd.cursor(1,0).print('Led Status: On')
      
      return res.json({message: 'success'})
      
   })
   
   app.get('/turn-off/:id', (req, res) => {
      const {id} = req.params
      

      
      led.stop().off();
      
      
      lcd.clear();
      lcd.print(`Led Port: ${id}`)
      lcd.cursor(1,0).print('Led Status: Off')
      
      
      return res.json({message: 'success'})
      
   })
   
   app.get('/blink/:id', (req, res) => {
      const {id} = req.params
      const {interval} = req.query;
      

      led.stop().off()
      
      led.blink(interval)
      
      lcd.clear();
      lcd.print(`Blink on port ${id}`)
      lcd.cursor(1,0).print(`Interval: ${interval}ms`)
      
      return res.json({message:'success'})
   })
   
   app.post('/lcd', (req, res) => {
      const {message} = req.body;
      
      const lcd = new five.LCD({ 
         controller: "PCF8574AT"
      });
      lcd.print('Message Received')
      lcd.cursor(1,0).print(message); 
      
      return res.json({message:'success'})
   })

   app.listen(3333, () => {
      console.log('Server Started in port 3333')
   })
})
