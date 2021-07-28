class Player {
    constructor(){
      this.index = null;
      this.health = 1000;
      this.name = null;
      this.distance = 0;
    
      //this.rank = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        health:this.health,
        distance:this.distance
   
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }

      updateDistance(data){
      position=data.val();
      charaters[index-1].x= position.x,
      charaters[index-1].y= position.y
    }
    
    
      setDistance(x,y){
      database.ref("character/position").set({
        'x': position.x + x,
        'y': position.y + y
      })
    }
  
    }

    

   
    
   
    /*getcarsAtEnd(){
      database.ref('carsAtEnd').on('value',(data)=>{
        this.rank = data.val();
      });
    }
    static updatecarsAtEnd(rank){
      database.ref('/').update({
        carsAtEnd: rank
      });
    }*/
  
  