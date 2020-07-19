import express from 'express';

import five from 'johnny-five';

const app = express();

app.use(express.json());

app.get('/turn-on/:id', (req, res) => {
   const {id} = req.params

   const led = new five.Led(id);
   const lcd = new five.LCD({ 
      controller: "PCF8574AT"
    });

   led.on();

   lcd.clear();
   lcd.print('Led Status: on  ')

   return res.json({message: 'success'})

})

app.get('/turn-off/:id', (req, res) => {
   const {id} = req.params

   const led = new five.Led(id);
   const lcd = new five.LCD({ 
      controller: "PCF8574AT"
    });

   led.off()

   lcd.clear();
   lcd.print('Led Status: off ')


   return res.json({message: 'success'})

})

app.post('/lcd', (req, res) => {
   const {message} = req.body;

   const lcd = new five.LCD({ 
      controller: "PCF8574AT"
   });

   lcd.print(message); 

})

export default app;