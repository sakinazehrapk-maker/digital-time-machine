const pages = {
    1998: `
        <h1 class="logo">DIGITAL TIME MACHINE</h1>
        <h2 class="year">1998</h2>
        <div class="construction blink">
            🚧 UNDER CONSTRUCTION 🚧
        </div>
        <div class="panel center-panel">
            <h2>Welcome to 1998!</h2>
            <p>
                Best viewed in Internet Explorer 4.0
            </p>
            <hr>
            <p>
                ✔ Guestbook<br>
                ✔ Visitor Counter<br>
                ✔ Cool GIFs
            </p>
        </div>
    `,
    2005: `
        <h1 class="logo">MYSPACE</h1>
        <h2 class="year">2005</h2>
        <div class="panel center-panel">
            <h2>Welcome to MySpace!</h2>
            <p>Mood: Happy 😎</p>
            <p>Now Playing:</p>
            <b>Green Day - Boulevard of Broken Dreams</b>
        </div>
    `,
    2010: `
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
  `
};
const themes = {
    1998: {
        browserTitle: "Digital Time Machine - 1998 - Netscape Navigator",
        address: "http://www.digitaltimemachine.com/1998/",
        status: "Done",
        background: "black"
    },
    2005: {
        browserTitle: "MySpace - Windows XP - Internet Explorer",
        address: "http://www.myspace.com/",
        status: "Loading complete",
        background: "#202020"
    },
    2010: {
        browserTitle: "Facebook - Google Chrome",
        address: "https://www.facebook.com/",
        status: "Ready",
        background: "#ffffff"
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