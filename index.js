const express=require("express");
const app=express();
const path=require("path")
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const server = createServer(app);
const io = new Server(server);

io.on('connection',(socket)=>{
    socket.on('send name',(username)=>{
        io.emit('send name',(username))
    })
    socket.on('send message',(chat)=>{
        io.emit('send message',(chat))
    })
})


app.use(express.static(path.resolve("./public")))

app.get("/",(req,res)=>{
  return res.sendFile(path.join(__dirname, "/public/chat.html"))
})



server.listen(4000,()=>console.log("Server is listening",4000))