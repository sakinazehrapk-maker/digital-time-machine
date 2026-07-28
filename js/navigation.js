const browserFrame =
    document.getElementById("browser-content");
const address =
    document.querySelector("#address-bar input");
const pages = {
    "geocities.com":"websites/1998/geocities.html",
    "yahoo.com":"websites/1998/yahoo.html",
    "aol.com":"websites/1998/aol.html",
    "msn.com":"websites/1998/msn.html",
    "icq.com":"websites/1998/icq.html",
    "spacejam.com":"websites/1998/spacejam.html",
    "altavista.com":"websites/1998/altavista.html"
};
address.addEventListener("keydown",e=>{
    if(e.key!=="Enter") return;
    const url=
        address.value
        .replace("http://","")
        .replace("https://","")
        .replace("www.","")
        .replace("/","");
    if(pages[url]){
        browserFrame.src=pages[url];
    }else{
        alert("404 Website not found.");
    }
});