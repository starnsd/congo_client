class House {

  constructor(x, y, direction, delivery = 0) {
    this._x = parseInt(x);
    this._y = parseInt(y);
    this._hasDelivery = (parseInt(delivery) == 1)
    console.log(direction)
    console.log(this.houseImage(direction))
    this.image = this.houseImage(direction)
    console.log(this.image)
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

  get x() {return this._x};
  get y() {return this._y};
  get dx() {return this._dx};
  get dy() {return this._dy};
  get hasDeliver() {return this._hasDelivery}

}