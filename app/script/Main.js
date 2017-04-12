window.onload = function () {
    canvas= document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    gameScreen = document.querySelector('canvas');

    let styleHero={
        x: 10,
        y: 10,
        width: 20,
        height: 20,
        color: '#ff0011'
    };

    let styleMonster={
        x: 30,
        y: 30,
        width: 20,
        height: 20,
        color: '#00ff11'
    };

    let screenInfo={
        width: gameScreen.width,
        height: gameScreen.height
    };

    hero = new Hero(ctx, styleHero, screenInfo);
    monster = new Monster(ctx, styleMonster, screenInfo);
    body = document.querySelector('body');
    body.onkeydown = function (e) {

        let code = e.keyCode;
        if(e.metaKey){
            e.preventDefault();
        }
        else if(code === 68){ // A
            right();
        }
        else if(code === 65){ // D
            left();
        }
        else if(code === 87){ // W
            up();
        }
        else if(code === 83){ // S
            down();
        }
    };

    function left() {
        hero.movesTo(-10,0);
    }
    function right() {
        hero.movesTo(10,0);

    }
    function up() {
        hero.movesTo(0,-10);

    }
    function down() {
        hero.movesTo(0,10);
    }
};