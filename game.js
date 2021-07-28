class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form() //object of form class, constructor will be executed
        form.display();
      }
    
    challenger = createSprite(100,100);
    challenger.addImage(challengerImg);
    pirate = createSprite(100,300);
    pirate.addImage(pirateImg);
    rockstar = createSprite(300,100);
    rockstar.addImage(rockstarImg);
    royalAgent = createSprite(300,300);
    royalAgent.addImage(royalAgentImg);
    charaters=[challenger,pirate,rockstar,royalAgent];
  }

   
  
  
    play(){
      form.hide();
      Player.getPlayerInfo();
     // player.getcarsAtEnd();
      if(allPlayers !== undefined){
        background(backgroundImg);
        // image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
        //var display_position = 100;
        textSize(30)
        fill("black")
        text("Health: "+ player.health, displayWidth - displayWidth + 40, displayHeight - 50)
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 50;
        var y;
  
       for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          charaters[index-1].x = x;
          charaters[index-1].y = y;
  
          //if (index === player.index){
            //fill('red');
            //ellipse(x,y,60,120);
            camera.position.x = charaters[index-1].x
            camera.position.y = charaters[index-1].y
         // }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
     /* if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }*/
      if (keyDown(UP_ARROW) && player.index !== null){
        player.setDistance(0,-10)
      }

      if (keyDown(DOWN_ARROW) && player.index !== null){
        player.setDistance(0,10)
      }

      if (keyDown(LEFT_ARROW) && player.index !== null){
        player.setDistance(-10,0)
      }

      if (keyDown(RIGHT_ARROW) && player.index !== null){
        player.setDistance(10,0)
      }
      /*if(player.distance>4250){
        gameState = 2;
        player.rank += 1;
        Player.updatecarsAtEnd(player.rank);*/
     // }
      drawSprites();
    }
    end(){
      console.log("You Finished");
      //console.log("Your rank is: "+ player.rank);
    }
  }