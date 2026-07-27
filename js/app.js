const messages=[
    "Initializing modem...",
    "Dialing...",
    "Negotiating connection...",
    "Authenticating...",
    "Connected at 56 kbps"
];
const status=document.getElementById("status");
messages.forEach((message,index)=>{
    setTimeout(()=>{
        status.textContent=message;
    },index*1500);
});
setTimeout(()=>{
    document.getElementById("dialup").style.display="none";
},7500);
function updateClock(){
    const clock=document.getElementById("clock");
    const now=new Date();
    clock.textContent=now.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });
}
updateClock();
setInterval(updateClock,1000);