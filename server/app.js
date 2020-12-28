//npm init
//npm i express->to create server
//npm i socket.io->enable socket.io
//npm i nodemon->automatically refresh server on changes


const app = require('express')();//create a server
const  http = require('http').createServer(app);
const  io = require('socket.io')(http);//socket io enabled

const userDB=[];

///when a socket connects to app.js
io.on('connection', function(socket) {
  console.log(` ${socket.id} connected `);
       
    socket.on("message-send" ,function(msg){
            let id= socket.id;
            let name;
            for(let i=0;i<userDB.length;i++){
              if(userDB[i].id == id){
                name=userDB[i].name;
                break;
              }
            }
         
            socket.broadcast.emit("message-rcv",{name:name,message:msg});
    })

    //new-user
    socket.on("new-user-connected",function(name){
        let obj={
          id:socket.id,
          name:name
        }

        userDB.push(obj);
        socket.broadcast.emit("new-user",name)
    })

    socket.on("online-user",function(name){
            
      socket.broadcast.emit("abcd",name)

    })

    //disconnect user
    socket.on('disconnect', function(reason){
      let id= socket.id;
      let name;
      let idx;
      for(let i=0;i<userDB.length;i++){
        if(userDB[i].id == id){
          name=userDB[i].name;
          idx=i;
          break;
        }
      }
      //splice funtion(idx,count of elements to delete)

       userDB.splice(idx,1);

      socket.broadcast.emit("left-chat",name);
    });

});

http.listen(3000, function(){
  console.log("listening on *:3000");
});

