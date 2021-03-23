class Control{
    constructor(){}

    readState(){
      var gamestateRef = database.ref("gamestate")
      gamestateRef.on("value",function(data){
          gamestate = data.val()
      })
    }
    updateState(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    gameStart(){
        if(gamestate === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }

        car1 = createSprite(100,200)
        car2 = createSprite(150,200)
        car3 = createSprite(200,200)
        car4 = createSprite(250,200)

        cars = [car1,car2,car3,car4]

    }
 
    play(){
        form.hide()
        console.log("play")
        textSize(20)
        text("GameStart",200,10)

        Player.getPlayerInfo()

        if(playersInfo !== undefined){
            //var yPosition = 150

            var index = 0
            var x = 0
            var y = 0
            
            for(var person in playersInfo){

                /*if(person === "Player"+ player.index){
                    fill("Red")
                }
                else {
                    fill("Black")
                }

                textSize(10)
                text(playersInfo[person].name +"-"+ playersInfo[person].distance, 200, yPosition)
                yPosition += 20*/


                index = index + 1

                x = x + 200 
                y = (displayHeight - 100) - playersInfo[person].distance
                cars[index - 1].x = x
                cars[index - 1].y = y


                if(index === player.index){
                    cars[index - 1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index - 1].y
                }

 
            }
        }
        console.log(player.index);
        if(keyIsDown(UP_ARROW) && player.index !== null){
            console.log("Key pressed");
          player.distance += 1
          player.update()
        }
    

        drawSprites()
    }
}
