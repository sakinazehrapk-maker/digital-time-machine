class WindowManager {
  constructor(){
    this.zIndex = 100;
  }
  bringToFront(win){
    this.zIndex++;
    win.style.zIndex = this.zIndex;
  }
  makeDraggable(win, handleSelector){
    const handle = win.querySelector(handleSelector);
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;
    handle.addEventListener("mousedown",(e)=>{
      dragging = true;
      this.bringToFront(win);
      offsetX = e.clientX - win.offsetLeft;
      offsetY = e.clientY - win.offsetTop;
    });
    document.addEventListener("mousemove",(e)=>{
      if(!dragging) return;
      win.style.left = `${e.clientX-offsetX}px`;
      win.style.top = `${e.clientY-offsetY}px`;
    });
    document.addEventListener("mouseup",()=>{
      dragging = false;
    });
  }
}
const WM = new WindowManager();
class Desktop {
  static open(title, page){
    const win = document.createElement("div");
    win.className = "window";
    win.innerHTML = `
      <div class="window-title">
        <span>${title}</span>
        <button class="close">&#10005;</button>
      </div>
      <iframe src="${page}"></iframe>
    `;
    document.getElementById("desktop").appendChild(win);
    WM.makeDraggable(win, ".window-title");
    WM.bringToFront(win);
    win.querySelector(".close").onclick = () => win.remove();
  }
}
class Browser {
  static init(){
    const browserWindow = document.getElementById("browser-window");
    WM.makeDraggable(browserWindow, "#title-bar");
    this.frame = document.getElementById("browser-content");
    this.addressInput = document.getElementById("address-input");
    this.status = document.getElementById("status-bar");
    this.pages = {
      "geocities.com":"websites/1998/geocities.html",
      "yahoo.com":"websites/1998/yahoo.html",
      "aol.com":"websites/1998/aol.html",
      "msn.com":"websites/1998/msn.html",
      "icq.com":"websites/1998/icq.html",
      "spacejam.com":"websites/1998/spacejam.html",
      "altavista.com":"websites/1998/altavista.html"
    };
    this.addressInput.addEventListener("keydown", e=>{
      if(e.key !== "Enter") return;
      this.navigateTo(this.addressInput.value);
    });
    document.getElementById("btn-home").addEventListener("click", ()=>{
      this.frame.src = "homepage.html";
      this.addressInput.value = "http://www.digitaltimemachine.com/1998/";
    });
    document.getElementById("btn-reload").addEventListener("click", ()=>{
      this.frame.src = this.frame.src;
    });
  }
  static navigateTo(rawUrl){
    const url = rawUrl
      .replace("http://","")
      .replace("https://","")
      .replace("www.","")
      .replace(/\/$/,"");
    if(this.pages[url]){
      this.status.textContent = `Opening ${url} ...`;
      this.frame.src = this.pages[url];
    }else{
      alert("404 Website not found.");
    }
  }
}
const dialupMessages = [
  "Initializing modem...",
  "Dialing...",
  "Negotiating connection...",
  "Authenticating...",
  "Connected at 56 kbps"
];
function runDialupSequence(){
  const statusEl = document.getElementById("status");
  dialupMessages.forEach((message, index)=>{
    setTimeout(()=>{
      statusEl.textContent = message;
    }, index * 1500);
  });
  setTimeout(()=>{
    document.getElementById("dialup").style.display = "none";
  }, dialupMessages.length * 1500 + 1000);
}
function updateClock(){
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
}
window.addEventListener("load", ()=>{
  document.getElementById("modem").play().catch(()=>{});
  runDialupSequence();
  updateClock();
  setInterval(updateClock, 1000);
  Browser.init();
});