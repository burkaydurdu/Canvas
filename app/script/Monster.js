class Monster extends Asset{

    constructor(object, style, screen){
        super(object, style, screen);
        this.object.fillStyle=this.color;
        this.object.fillRect(this.x, this.y, this.width, this.height);
    }

    writeTo(){
        this.object.fillStyle=this.color;
        this.object.fillRect(this.x, this.y, this.width, this.height);
    }
    clearTo(){
        this.object.fillStyle='#FFFFFF';
        this.object.fillRect(this.x, this.y, this.width, this.height);
    }
}