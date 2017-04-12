class Asset{

    constructor(object, style, screen){
        this.x=style.x;
        this.y=style.y;
        this.width=style.width;
        this.height=style.height;
        this.color = style.color;
        this.object = object;
        this.screen = screen;
        this.object.moveTo(0,0);
    }
    movesTo(x,y){
        this.clearTo();
        this.x = this.x + x > (this.screen.width-this.width) || this.x + x < 0 ? this.x :this.x + x;
        this.y = this.y + y > (this.screen.height-this.height) || this.y + y < 0 ? this.y :this.y + y;
        console.log("x: "+ this.x+" y: "+ this.y);
        this.writeTo();
    }
    writeTo(){
        //@Polimorfizm
    }
    clearTo(){
        //@Polimorfizm
    }
}