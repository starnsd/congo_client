class House {

  constructor(x, y, direction, delivery = 0) {
    this._x = parseInt(x);
    this._y = parseInt(y);
    this._hasDelivery = (parseInt(delivery) == 1)
    this.image = this.houseImage(direction)
    this._dx = 50;
    this._dy = 50;
    this._hasDog = false
    this._direction = direction
    this.name = `house${this.constructor.all.length}`
    this.constructor.all.push(this)
  }
  static all = [];

  houseImage(direction) {
    let picture = "images/Houses/HouseEast.gif"
      switch (direction) {
        case "north":
        picture = (this._hasDelivery ? 'images/Houses/HouseNorthSelected.gif' : 'images/Houses/HouseNorth.gif')
        break;
        case "east":
        picture = (this._hasDelivery ? 'images/Houses/HouseEastSelected.gif' : 'images/Houses/HouseEast.gif')
        break;
        case "south":
        picture = (this._hasDelivery ? 'images/Houses/HouseSouthSelected.gif' : 'images/Houses/HouseSouth.gif')
        break;
        case "west":
        picture = (this._hasDelivery ? 'images/Houses/HouseWestSelected.gif' : 'images/Houses/HouseWest.gif')
        break;
      }
    return picture;
  }

   render() {
     const pic = new Image();
     pic.src = this.image;
     pic.addEventListener('load', function() {
       Dom.ctx.drawImage(pic, this.x, this.y, 100, 100);
     }.bind(this), false)
   }

  makeDelivery(driver) {
    if (driver instanceof Driver && driver._hasPackage && this._hasDelivery) {
      let h = this;
      let d = driver;
      if (!(h.x > d.x + d.dx || h.x + h.dx < d.x || h.y > d.y + d.dy || h.y + h.dy < d.y)) {
        this.successfulDelivery(driver);
      }
    }    
  }

  successfulDelivery(driver) {
    driver.placePackage();
    this._hasDelivery = false;
    this.image = this.houseImage(this._direction)
  }

  get x() {return this._x};
  get y() {return this._y};
  get dx() {return this._dx};
  get dy() {return this._dy};
  get hasDeliver() {return this._hasDelivery}

}