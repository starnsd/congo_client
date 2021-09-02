class Driver {

  constructor(vanX, vanY) {
    this._x = vanX - 50;
    this._y = vanY;
    this.image = this.east;
    this._dx = 100;
    this._dy = 100;
  }

  static isParked = false;

  get east() { return 'images/Drivers/EastDriver.gif'};
  get north() { return 'images/Drivers/NorthDriver.gif'};
  get south() { return 'images/Drivers/SouthDriver.gif'};
  get west() { return 'images/Drivers/WestDriver.gif'};
  get x() {return this._x};
  get y() {return this._y};
  get dx() {return this._dx};
  get dy() {return this._dy};
  set x(x) {this._x = x};
  set y(y) {this._y = y};
}