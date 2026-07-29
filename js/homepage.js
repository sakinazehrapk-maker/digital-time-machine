const counter = document.getElementById("counter");
let visits = 129876;
setInterval(()=>{
  visits++;
  counter.textContent = visits.toString().padStart(8,"0");
}, 2000);