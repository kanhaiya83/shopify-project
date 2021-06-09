let userinput = document.querySelector("#userinput");
let buuton = document.querySelector(".kanhaiya");

function sendText(msg) {
    //Value got from input field in popup
    let message = msg
    //Sending message to content
    chrome.tabs.query({active: true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,message,()=>{
        console.log("msg sent from popup.js")
    });
    });
    }

userinput.addEventListener("change", () => {
  sendText(userinput.value)
  console.log(userinput.value)
});
buuton.onclick = () => {
  alert("Yay!!");
};

