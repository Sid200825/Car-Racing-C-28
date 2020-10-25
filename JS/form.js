class Form {
    constructor(){
        this.title = createElement("h2")
        this.title.html("Car Racing Game")
        this.title.position(windowWidth/2-90,10)
        
        this.input = createInput("Name")
        this.input.position(windowWidth/2,windowHeight/2-70)

        this.button = createButton("play")
        this.button.position(windowWidth/2+60,windowWidth/2)

        this.greeting = createElement("h2")

    }

    hide(){
        this.input.hide()
           this.button.hide()
           this.greeting.hide()
    }

    display(){
       
        this.button.mousePressed(()=>{
            this.input.hide()
           this.button.hide()
            player.name= this.input.value()
            playerCount = playerCount + 1
            player.index = playerCount

            player.update()
            player.updateCount(playerCount)

            this.greeting.html("Hello "+player.name)
            this.greeting.position(windowWidth/2-70,windowHeight/4)
        })



    }

}