let userOne= document.getElementById("text-user")
let userTwo= document.getElementById("user-text")
const sendOne = document.getElementById("send-btn")
const sendTwo = document.getElementById("send-btn-two")
let screen = document.getElementsByClassName("screen")
let screenList = document.getElementById("display-chat")
let chat = [];
let chatStore="";

sendOne.addEventListener("click", function () {
let obj={user:1,message:userOne.value}
    chat.push(obj);
    textOfUser(userOne)
})

userOne.addEventListener("keypress", function (e) {
    if (e.key == 'Enter'){
        let obj={user:1,message:userOne.value}
    chat.push(obj);
    textOfUser(userOne)
    }
})

sendTwo.addEventListener("click", function () {
    let obj={user:2,message:userTwo.value}
    chat.push(obj)
    textOfUser (userTwo);
})

userTwo.addEventListener("keypress", function (e) {
    if (e.key == 'Enter'){
        let obj={user:2,message:userTwo.value}
        chat.push(obj)
        textOfUser (userTwo);
    }
})

function textOfUser(textarea){
    chatStore="";
    console.log("chat store value: ",chatStore)
    for(let i=0; i<chat.length; i++){
    let obj=chat[i];
    chatStore+=obj.user+" :"+obj.message+ "\n" +"\n"
    }
    screenList.innerHTML =""
    screenList.innerHTML = chatStore;
    textarea.value = ""
}

