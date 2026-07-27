class TimeEngine {
    constructor(){
        this.currentYear = null;
    }
    async travel(year){
        const response =
            await fetch(`eras/${year}.json`);
        const era =
            await response.json();
        this.currentYear = era;
        ThemeLoader.load(era);
        Browser.update(era);
        Effects.apply(era);
        Homepage.load(era);
    }
}
const Engine = new TimeEngine();