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

  isOnRoad = (van) => {
    let r = this
    let v = van
    if ( !(r._x > v.x + v.dx || r._x + r._dx < v.x || r._y > v.y + v.dy || r._y + r._dy < v.y) ) {
      return true
    } else {
      return false
    }
  }

}