class form{
    constructor(){
        this.input = createInput("NAME");
        this.button = createButton("PLAY");
        this.greeting = createElement("h3");
        this.reset= createButton("RESET");
    }
    display(){
        var title = createElement("h2");
        title.html("CAR RACE");
        title.position(displayWidth/2, 50);
        this.reset.position(displayWidth-100, 20);
        
        this.input.position(displayWidth/2, 150);
        this.button.position(displayWidth/2 + 150, 150);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            Player.name = this.input.value();
            playerCount++;
            Player.index = playerCount;
            Player.update();
            Player.updateCount(playerCount);
            this.greeting.html("HELLO " + Player.name);
            this.greeting.position(displayWidth/2,displayHeight/2);
        });

        this.reset.mousePressed(()=>{
            Player.updateCount(0);
            Game.update(0);
            database.ref("/").update({
                Players : null,
                carsAtEnd: 0
            });
        });
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}