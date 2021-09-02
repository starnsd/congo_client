class Van {

  constructor(x, y) {
    this._x = x;
    this._y = y;
    this.image = this.east
    this._dx = 100;
    this._dy = 100;
  }

  get east() { return 'images/Vans/EastVanDriving.gif'};
  get north() { return 'images/Vans/NorthVanDriving.gif'};
  get south() { return 'images/Vans/SouthVanDriving.gif'};
  get west() { return 'images/Vans/WestVanDriving.gif'};
  get x() {return this._x};
  get y() {return this._y};
  get dx() {return this._dx};
  get dy() {return this._dy};
  set x(x) {this._x = x};
  set y(y) {this._y = y};
}