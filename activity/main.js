const chatBox=document.querySelector(".chat-box");
const messageInput=document.querySelector("#chat");
const send=document.querySelector(".chat-send");
const onlineBox=document.querySelector(".online");

const Name = prompt("Enter Your Name");

socket.emit("new-user-connected",Name);
socket.emit("online-user",Name);



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
        chatBox.scrollTop=chatBox.scrollHeight;//jab bhi nya msg ya kuch bhi ho to uske acc scroll bar ki height fix ho jaye
        socket.emit("message-send",msg);//ye phle socket ke pass jayega
        
    }
})