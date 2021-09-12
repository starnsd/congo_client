class Road {

  constructor(road) {
    this._x = parseInt(road.x);
    this._y = parseInt(road.y);
    this._dx = parseInt(road.dx);
    this._dy = parseInt(road.dy);
    this.constructor.all.push(this);
  }

  static all = [];

  static color = "rgba(128,128,128, 100)";

}