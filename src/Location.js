class Location {

  constructor(jsonObj) {
    this.timer = jsonObj.time;
    this.backgroundColor = jsonObj.background;
    this.roads = jsonObj.roads
    this.createRoads(this.roads)
    this.houses = jsonObj.houses
    this.createHouses(jsonObj.houses)
    this.scores = jsonObj.scores
    this.stateChange = true
    this.gameOver = false;
    this.constructor.all.push(this)
  }

  static all = [];

  highScores() {
    const highScores = this.scores.sort( (a, b) => {return b.points - a.points})
    return highScores;
  }

  deliveries() {
    return House.all.map(house => house._hasDelivery).filter(Boolean).length
  }

  isGameOver() {
    if (this.timer <= 0 || this.deliveries() == 0) {
      this.gameOver = true;
      game.user = api.user.username;
    }
  }

  endGameEvent = () => {
    const replay = window.confirm(`Thanks for playing!  Your score was ${game.score}.  Play again?`);
    if (replay) {
      game.score = 0;
      Dom.ctx.clearRect(0,0, canvas.width, canvas.height);
      Dom.removeAllChildNodes(Dom.form)
      Dom.removeAllChildNodes(Dom.game)
      Dom.removeAllChildNodes(Dom.stats)
      Dom.removeAllChildNodes(Dom.scores)
      const userOptions = document.getElementById("useroptions")
      Dom.removeAllChildNodes(userOptions)
      van.x = 14;
      van.y = 326;
      Driver.all.pop();
      van.isDriving = true;
      for (let i = 0; i < Road.all.length; i++) {
        delete Road.all[i]
      }
      Road.all = []
      for (let i = 0; i < House.all.length; i++) {
        delete House.all[i]
      }
      House.all = []
      startTheGame();
    } else {
      alert("The game is over, Have a wonderful day!");
    }
  }

  forcePaint() {
    game.paused = false
    this.stateChange = true
    this.paint();
    game.paused = true
  }

    paint() {
      if (!!this.stateChange && !game.paused) {
        Dom.ctx.clearRect(0,0, canvas.width, canvas.height);
        Dom.ctx.fillStyle = "rgba(11,156,49,0.6)";
        Dom.ctx.fillRect(0, 0, 1500, 750);
        Dom.ctx.fillStyle = "rgba(128,128,128, 100)"
        Dom.ctx.fillRect(0, 350, 500, 50); //road
        Dom.ctx.fillRect(500, 125, 50, 500); //road
        Dom.ctx.fillRect(550, 125, 800, 50); //road
        Dom.ctx.fillRect(1300, 125, 50, 500); //road
        Dom.ctx.fillRect(550, 575, 800, 50);  //road
        Dom.ctx.fillRect(825, 125, 50, 500); //road
        Dom.ctx.fillRect(875, 350, 425, 50); //road
        Van.all[0].render();
        if (!Van.all[0].isDriving) {
          Driver.all[0].render();
        }
        House.all[0].render();
        House.all[1].render();
        House.all[2].render();
        House.all[3].render();
        House.all[4].render();
        House.all[5].render();
        House.all[6].render();
        House.all[7].render();
        House.all[8].render();
        House.all[9].render();
        House.all[10].render();
        House.all[11].render();
        House.all[12].render();
        House.all[13].render();
        House.all[14].render();
        House.all[15].render();
        House.all[16].render();
        House.all[17].render();
        House.all[18].render();
        House.all[19].render();
        House.all[20].render();
        House.all[21].render();
        House.all[22].render();
        House.all[23].render();
        House.all[24].render();
        House.all[25].render();
        House.all[26].render();
        House.all[27].render();
        House.all[28].render();
      }
      this.stateChange = false
    }

  createHouses(houses) {
    houses.forEach(house => new House(house));
    this.houses = undefined;
  }

  createRoads(roads) {
    roads.forEach(road => new Road(road))
    this.roads = undefined
  }
}