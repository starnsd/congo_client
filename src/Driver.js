class Driver {

  constructor(van) {
    this._x = van.x - 50;
    this._y = van.y;
    this.image = this.east;
    this._dx = 25;
    this._dy = 25;
    this.constructor.all.push(this)
  }

  static all = [];

  get name() {return "driver"}
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

  move(keyCode) {
    switch (keyCode) {
      case 39:
        this._x += 2;
        this.image = this.east;
        break;
      case 38:
        this._y -= 2;
        this.image = this.north;
        break;
      case 37:
        this._x -= 2;
        this.image = this.west;
        break;
      case 40:
        this._y += 2;
        this.image = this.south;
        break;
      default:
        break;
    }
  // e.keyCode == 39 is right
  // e.keyCode == 38 is up
  // e.keyCode == 37 is left
  // e.keyCode == 40 is down
  }
}