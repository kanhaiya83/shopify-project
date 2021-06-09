console.log("Chrome Extension ready to go!");
chrome.runtime.onMessage.addListener(replace);
//Replace
function replace(message, sender, sendresponse) {
    

console.log("got msg");
console.log(message)
let paragraphs = document.querySelectorAll("p");
for (let i=0;i < paragraphs.length;i++) {
paragraphs[i].innerHTML=message
}
}