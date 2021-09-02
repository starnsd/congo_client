class Driver {

  constructor(vanX, vanY) {
    this._x = vanX - 10;
    this._y = vanY;
    this.image = this.east;
  }

  get east() { return 'images/Drivers/EastDriver.gif'};
  get north() { return 'images/Drivers/NorthDriver.gif'};
  get south() { return 'images/Drivers/SouthDriver.gif'};
  get west() { return 'images/Drivers/WestDriver.gif'};
  get x() {return this._x};
  get y() {return this._y};
}