class ThemeLoader{
    static load(era){
        document.body.dataset.theme =
            era.desktop;
        document.body.style.fontFamily =
            era.font;
    }
}