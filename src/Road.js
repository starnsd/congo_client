class Road {

  constructor(x, y, direction) {
    this._x = parseInt(x);
    this._y = parseInt(y);
    this._direction = direction;
    this._isUp = (direction == "up")
    this._dx = (this._isUp ? 50 : 25)
    this._dy = (this._isUp ? 25 : 50)
    this.image = (this._isUp ? 'images/Roads/HorizontalRoad.gif' : 'images/Roads/HorizontalRoad.gif')
    this.constructor.all.push(this);
  }

  static all = [];

}