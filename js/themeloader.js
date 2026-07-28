class ThemeLoader {
    static load(era){
        document.body.style.fontFamily = era.font;
        document.body.dataset.theme = era.desktop;
    }
}