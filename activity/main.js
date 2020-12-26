const chatBox=document.querySelector(".chat-box");
const messageInput=document.querySelector("#chat");
const send=document.querySelector(".chat-send");

const Name = prompt("Enter Your Name");

socket.emit("new-user-connected",Name);


//sender
send.addEventListener("click",function(){
    let msg=messageInput.value;
    if(msg){
        let chatItem=document.createElement("div");
        chatItem.classList.add("chat-item");
        chatItem.classList.add("right");
        chatItem.innerHTML=msg;
        chatBox.appendChild(chatItem);
        messageInput.value="";
        socket.emit("message-send",msg);//ye phle socket ke pass jayega
        
    }
})