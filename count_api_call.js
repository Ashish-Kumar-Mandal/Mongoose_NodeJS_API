const express = require('express');
const EventEmitter = require('events');

const app = express();
const event = new EventEmitter();

let api_Count = 0;

event.on('apiCount', ()=>{
    api_Count++
    console.log(api_Count + " times API called")
})

app.get('/', (req, res)=>{
    res.send("API Call")
    event.emit('apiCount')
});

app.listen(4545);
