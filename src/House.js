class House {

  constructor(x, y) {
    this._x = x;
    this._y = y;
    this.image = this.east
    this._dx = 100;
    this._dy = 100;
    this._hasDelivery = false
    this._hasDog = false
    this.constructor.all.push(this)
  }

  get east() {return (this._hasDelivery ? 'images/Houses/HouseEastSelected.gif' : 'images/Houses/HouseEast.gif')}

  get x() {return this._x};
  get y() {return this._y};
  get dx() {return this._dx};
  get dy() {return this._dy};



  static all = [];

  
}