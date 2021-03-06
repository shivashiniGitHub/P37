class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('contestantCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount : count
      });
    }
  
    update(){
      var playerIndex = "contestants/contestant" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  