class Player{
    constructor(){
      this.index = null
      this.name = null
      this.distance = 0    
    }

    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", function(data){
            playerCount = data.val()
        })
    }

    countUpdate(count){
      database.ref("/").update({
          playerCount:count
      })  
    }

    update(){
        var playerIndex = "Players/Player"+ this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref("Players");
        playerInfoRef.on ("value", function(data){
            playersInfo = data.val()
            console.log(playersInfo)
        })
    }
}




