const btn=document.getElementById("travelBtn");
btn.onclick=()=>{
    const year=document.getElementById("yearInput").value;
    if(year==="1998"){
        window.location="index.html";
    }else{
        alert("Time travel for that year is not built yet!");
    }
}