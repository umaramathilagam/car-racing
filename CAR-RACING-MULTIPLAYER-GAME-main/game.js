class game{
    constructor(){
      
    }
     getState(){
         var gameStateRef = database.ref("gameState");
         gameStateRef.on("value", function(data){
             gameState = data.val();
         });
    }
    update(state){
        database.ref("/").update({
            gameState : state
        });
    }
    async start (){
        if(gameState === 0){
            Player = new player();
            Player.getCount();
            Form = new form();
            Form.display();
            car1 = createSprite(100, 200);
            car1.addImage("car1", carImage1);
            car2 = createSprite(300, 200);
            car2.addImage("car2", carImage2);
            car3 = createSprite(500, 200);
            car3.addImage("car3", carImage3);
            car4 = createSprite(700, 200);
            car4.addImage("car4", carImage4);
            cars = [car1, car2, car3, car4];
        }
    }
    play(){
        Form.hide();
        player.inform_allPlayers();
        Player.getCarsAtEnd();
        if(allPlayers != undefined){
            image(trackImage,0,-displayHeight*4, displayWidth, displayHeight*5);
            var index = 0;
            var x = 175;
            var y;
            for(var clr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[clr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === Player.index){
                    console.log(cars[index-1].y);
                    fill("red");
                    cars[index-1].shapeColor = "red"; 
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }         
        }
        if(keyIsDown(UP_ARROW) && Player.index!==null){
        Player.distance+=50;
        console.log(Player.distance);
        Player.update();
        }
        if(Player.distance>3800){
            //image(endimage, displayWidth/2, displayHeight/2, displayWidth, displayHeight);
        gameState = 2;
        Player.rank = Player.rank + 1
        console.log(Player.rank);
        player.updateCarsAtEnd(Player.rank);
        Player.updateRank(Player.rank);
       
        
        }
        drawSprites();
    }   


    end(){
        camera.position.y = 0;
        camera.position.x = 0;

        imageMode(CENTER);
        image(endimage, width/-4+400, displayHeight/-4 + 200,500, 500);
        console.log("GAME END");
        console.log(Player.rank);

        
        //
        
    }

    displayRank(){

        camera.position.y = 0;
        camera.position.x = 0;

        imageMode(CENTER);

        player.inform_allPlayers();
        if(allPlayers != undefined){
        var index = 0;
        for(var clr in allPlayers){
            var ranks = allPlayers[clr].rank
            index = index + 1;
            if(index === Player.index){
                if(ranks === 1){
                    image(gold, width/-4+400, displayHeight/-4 + 200,600, 600);
                }
                else if (ranks === 2){
                    image(silver, width/-4+400, displayHeight/-4 + 200,600, 600);
                }
                else if(ranks === 3){
                    image(bronze, width/-4+400, displayHeight/-4 + 200,600, 600);
                }
            }

        }
    }

}
    }
