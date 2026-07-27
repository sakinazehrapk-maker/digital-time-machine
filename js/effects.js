class Effects{
    static apply(era){
        document.body.classList.remove(
            "crt",
            "scanlines",
            "blink"
        );
        era.effects.forEach(effect=>{
            document.body.classList.add(effect);
        });
    }
}