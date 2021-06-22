class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.reset = createButton("reset")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background(bgImg);
    this.title.html("Zombie Shooter");
    this.title.position(displayWidth/2 - 250, 0);

    

    this.input.position(displayWidth/2 - 100 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 40, displayHeight/2);
    this.reset.position(displayWidth-200,30);
    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateRobotsAtEnd(0);
      database.ref('players').remove();

      
    })

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}