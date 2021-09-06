class Road {

  constructor(x, y, dx, dy) {
    this._x = parseInt(x);
    this._y = parseInt(y);
    this._dx = parseInt(dx);
    this._dy = parseInt(dy);
    this.constructor.all.push(this);
  }

  static all = [];

  static color = "rgba(128,128,128, 100)";

}