
//recevier 
socket.on("message-rcv",function(obj){
        let chatItem=document.createElement("div");
        chatItem.classList.add("chat-item");
        chatItem.classList.add("left");
        chatItem.innerHTML=`${obj.name} :${obj.message}`;
        chatBox.appendChild(chatItem);
        messageInput.value="";
    
})

//new user enter the chat
socket.on("new-user",function(name){
        let chatItem=document.createElement("div");
        chatItem.classList.add("join");
        chatItem.innerHTML=`${name} joined chat`;
        chatBox.appendChild(chatItem);
})

//joined chat
socket.on("left-chat",function(name){
        let chatItem=document.createElement("div");
        chatItem.classList.add("leave");
        chatItem.innerHTML=`${name} left chat`;
        chatBox.appendChild(chatItem);
})