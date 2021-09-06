class Location {

  static stateChange = true

  static paint() {
    if (!!this.stateChange) {
      Dom.ctx.clearRect(0,0, canvas.width, canvas.height);
      Dom.ctx.fillStyle = "rgba(11,156,49,0.6)";
      Dom.ctx.fillRect(0, 0, 1500, 750);
      Dom.ctx.fillStyle = "rgba(128,128,128, 100)"
      Dom.ctx.fillRect(0, 350, 500, 50); //road
      Dom.ctx.fillRect(500, 125, 50, 500); //road
      Dom.ctx.fillRect(550, 125, 800, 50); //road
      Dom.ctx.fillRect(1300, 125, 50, 500); //road
      Dom.ctx.fillRect(550, 575, 800, 50);  //road
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
    }
    this.stateChange = false
  }

  static createHouses() {
    new House(475, 14, "south", 1);
    new House(550, 14, "south", 0);
    new House(625, 14, "south", 0);
    new House(700, 14, "south", 1);
    new House(775, 14, "south", 0);
    new House(850, 14, "south", 0);
    new House(925, 14, "south", 0);
    new House(1000, 14, "south", 1);
    new House(1075, 14, "south", 0);
    new House(1150, 14, "south", 0);
    new House(1225, 14, "south", 1);
    new House(1360, 100, "west", 1);
    new House(1360, 175, "west", 0);
    new House(1360, 250, "west", 1);
    new House(1360, 325, "west", 0);
    new House(1360, 400, "west", 0);
    new House(1360, 475, "west", 0);
    new House(1360, 550, "west", 1);
  }
}