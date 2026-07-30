const pages = {
1995:`
<h1 class="logo">WELCOME TO THE WORLD WIDE WEB</h1>
<h2 class="year">1995</h2>
<div class="construction blink">
🌐 NEW WEBSITE 🌐
</div>
<div class="panel center-panel">
<h2>Welcome!</h2>
<p>
The Internet is growing every day!
</p>
<ul>
<li>New Search Engines</li>
<li>Netscape Navigator Released</li>
<li>Windows 95</li>
</ul>
</div>
`,
1998:`
<h1 class="logo">DIGITAL TIME MACHINE</h1>
<h2 class="year">1998</h2>
<div class="construction blink">
🚧 UNDER CONSTRUCTION 🚧
</div>
<div class="panel center-panel">
<h2>Welcome to 1998!</h2>
<p>
Best viewed in
Internet Explorer 4
</p>
<hr>
<p>
✔ Visitor Counter
<br>
✔ Guestbook
<br>
✔ Email Me!
<br>
✔ Cool GIFs
</p>
</div>
`,
2000:`
<h1 class="logo">DOT COM BOOM</h1>
<h2 class="year">2000</h2>
<div class="panel center-panel">
<h2>Everything is becoming .com</h2>
<p>
Internet companies are everywhere!
</p>
</div>
`,
2001:`
<h1 class="logo">YAHOO!</h1>
<h2 class="year">2001</h2>
<div class="panel center-panel">
<h2>Yahoo Directory</h2>
<ul>
<li>News</li>
<li>Sports</li>
<li>Shopping</li>
<li>Finance</li>
<li>Weather</li>
</ul>
</div>
`,
2003:`
<h1 class="logo">MSN Messenger</h1>
<h2 class="year">2003</h2>
<div class="panel center-panel">
<h2>Who's Online?</h2>
<p>
😀 Ali
<br>
😎 Sara
<br>
😊 John
</p>
</div>
`,
2005:`
<h1 class="logo">MYSPACE</h1>
<h2 class="year">2005</h2>
<div class="panel center-panel">
<h2>My Profile</h2>
<p>
Mood: Happy
</p>
<p>
Now Playing:
</p>
<b>
Green Day
</b>
</div>
`,
2007:`
<h1 class="logo">iPhone Launch</h1>
<h2 class="year">2007</h2>
<div class="panel center-panel">
<h2>Touch Changes Everything</h2>
</div>
`,
2008:`
<h1 class="logo">Google Chrome</h1>
<h2 class="year">2008</h2>
<div class="panel center-panel">
<h2>Faster. Simpler.</h2>
</div>
`,
2010:`
<h1 class="logo">Facebook</h1>
<h2 class="year">2010</h2>
<div class="panel center-panel">
<h2>News Feed</h2>
<div class="post">
John updated his status.
</div>
<br>
<div class="post">
Emily uploaded 14 photos.
</div>
</div>
`,
2012:`
<h1 class="logo">Instagram</h1>
<h2 class="year">2012</h2>
<div class="panel center-panel">
<h2>Photo Feed</h2>
📷 Sunset
<br>
📷 Coffee
<br>
📷 Vacation
</div>
`,
2015:`
<h1 class="logo">Material Design</h1>
<h2 class="year">2015</h2>
<div class="panel center-panel">
<h2>Modern Cards</h2>
<p>
Flat UI is everywhere.
</p>
</div>
`,
2018:`
<h1 class="logo">Dark Mode</h1>
<h2 class="year">2018</h2>
<div class="panel center-panel">
🌙
<h2>Dark Theme</h2>
</div>
`,
2020:`
<h1 class="logo">Remote World</h1>
<h2 class="year">2020</h2>
<div class="panel center-panel">
📹 Zoom Meeting
<br>
🏠 Work From Home
</div>
`,
2023:`
<h1 class="logo">AI Revolution</h1>
<h2 class="year">2023</h2>
<div class="panel center-panel">
🤖 AI Assistant
<br>
🎨 AI Images
<br>
💬 Chatbots
</div>
`,
2025:`
<h1 class="logo">Future Web</h1>
<h2 class="year">2025</h2>
<div class="panel center-panel">
✨ AI Everywhere
<br>
🌌 Glassmorphism
<br>
🧠 Smart Search
</div>
`
};
const themes = {
1995:{
browserTitle:"Netscape Navigator",
address:"http://www.welcome.com",
status:"Done",
background:"#001a33"
},
1998:{
browserTitle:"Netscape Navigator",
address:"http://www.digitaltimemachine.com/1998/",
status:"Done",
background:"black"
},
2000:{
browserTitle:"Internet Explorer 5",
address:"http://www.portal.com",
status:"Done",
background:"#081a3d"
},
2001:{
browserTitle:"Yahoo!",
address:"http://www.yahoo.com",
status:"Ready",
background:"#25005e"
},
2003:{
browserTitle:"MSN Messenger",
address:"http://messenger.msn.com",
status:"Connected",
background:"#0066cc"
},
2005:{
browserTitle:"MySpace",
address:"http://www.myspace.com",
status:"Ready",
background:"#222"
},
2007:{
browserTitle:"Safari",
address:"http://www.apple.com",
status:"Done",
background:"#f0f0f0"
},
2008:{
browserTitle:"Google Chrome",
address:"https://www.google.com",
status:"Done",
background:"#ffffff"
},
2010:{
browserTitle:"Facebook",
address:"https://facebook.com",
status:"Ready",
background:"#ffffff"
},
2012:{
browserTitle:"Instagram",
address:"https://instagram.com",
status:"Connected",
background:"#fafafa"
},
2015:{
browserTitle:"Google",
address:"https://google.com",
status:"Done",
background:"#f5f5f5"
},
2018:{
browserTitle:"Dark Mode",
address:"https://modernweb.com",
status:"Ready",
background:"#121212"
},
2020:{
browserTitle:"Zoom",
address:"https://zoom.us",
status:"Connected",
background:"#f4f7fb"
},
2023:{
browserTitle:"AI Assistant",
address:"https://chat.openai.com",
status:"Thinking...",
background:"#202123"
},
2025:{
browserTitle:"Future Browser",
address:"https://future.ai",
status:"Ready",
background:"#0e1117"
}
};
function updateClock() {
    const clock = document.getElementById("clock");
    if (!clock) return;
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours || 12;
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    clock.textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;
}
updateClock();
setInterval(updateClock, 1000);
let visitors = 129876;
function updateCounter() {
    const counter = document.getElementById("counter");
    if (!counter) return;
    visitors++;
    counter.textContent =
        String(visitors).padStart(8, "0");
}
setInterval(updateCounter, 4000);
const travelBtn = document.getElementById("travelBtn");
if (travelBtn) {
    travelBtn.addEventListener("click", travel);
}
function travel() {
    const input = document.getElementById("yearInput");
    if (!input) return;
    const year = Number(input.value);
    if (!themes[year] || !pages[year]) {
        alert("That year hasn't been built yet!");
        return;
    }
    const loading = document.getElementById("loadingScreen");
    if (loading) {
        loading.classList.remove("hidden");
        setTimeout(() => {
            loading.classList.add("hidden");
            applyTheme(year);
        }, 2500);
    } else {
        applyTheme(year);
    }
}
function applyTheme(year){
    const pageContent = document.getElementById("pageContent");
    if(pageContent){
        pageContent.innerHTML = pages[year];
    }
    document.getElementById("website").style.background =
        themes[year].background;
    document.getElementById("browserTitle").textContent =
        themes[year].browserTitle;
    document.getElementById("addressBar").value =
        themes[year].address;
    document.getElementById("statusBar").textContent =
        themes[year].status;
    updateClock();
}
const yearInput = document.getElementById("yearInput");
if(yearInput){
    yearInput.addEventListener("keydown", function(e){
        if(e.key==="Enter"){
            travel();
        }
    });
}
applyTheme(1998);