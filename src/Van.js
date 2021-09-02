class Van {

  constructor(x, y) {
    this._x = x;
    this._y = y;
    this.image = this.east
    this._dx = 100;
    this._dy = 100;
    this._isDriving = true;
  }

  get name() {return "van"};
  get east() { return (this._isDriving ? 'images/Vans/EastVanDriving.gif' : 'images/Vans/EastVanParked.gif')};
  get north() { return (this._isDriving ? 'images/Vans/NorthVanDriving.gif' : 'images/Vans/NorthVanParked.gif')};
  get south() { return (this._isDriving ? 'images/Vans/SouthVanDriving.gif' : 'images/Vans/SouthVanParked.gif')};
  get west() { return (this._isDriving ? 'images/Vans/WestVanDriving.gif' : 'images/Vans/WestVanParked.gif')};
  get x() {return this._x};
  get y() {return this._y};
  get dx() {return this._dx};
  get dy() {return this._dy};
  set x(x) {this._x = x};
  set y(y) {this._y = y};
}