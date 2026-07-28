document.querySelectorAll(".icon").forEach(icon=>{
    icon.addEventListener("dblclick",()=>{
        const app=icon.dataset.app;
        WindowManager.open(app);
    });
});