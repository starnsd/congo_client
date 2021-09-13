class Van {

  constructor(x, y) {
    this._x = x;
    this._y = y;
    this.image = this.east
    this._dx = 25;
    this._dy = 25;
    this._isDriving = true;
    this.constructor.all.push(this)
  }

  static all = [];

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
  get isDriving() {return this._isDriving}

  toggleDriver() {
    this._isDriving = (!this._isDriving)
    return (this._isDriving ? Driver.all.pop() : new Driver(this))
  }

  buckleUp(driver) {
    let v = this;
    let d = driver;
    if (!(v.x > d.x + d.dx || v.x + v.dx < d.x || v.y > d.y + d.dy || v.y + v.dy < d.y)) {
      this.toggleDriver();
    }
  }

  move(keyCode) {
    let vanPos = {}
    vanPos.x = this.x;
    vanPos.y = this.y;
    vanPos.dx = this.dx;
    vanPos.dy = this.dy;
    switch (keyCode) {
      case 39:
        vanPos.x += 6;
        this.image = this.east;
        break;
      case 38:
        vanPos.y -= 6;
        this.image = this.north;
        break;
      case 37:
        vanPos.x -= 6;
        this.image = this.west;
        break;
      case 40:
        vanPos.y += 6;
        this.image = this.south;
        break;
      case 32:
        this.toggleDriver();
        break;
      default:
        break;
    }
    if (Road.all.some(road => road.isOnRoad(vanPos))) {
      this._x = vanPos.x;
      this._y = vanPos.y;
    }
  }

  render() {
    const pic = new Image();
    pic.src = this.image;
    pic.addEventListener('load', function() {
      Dom.ctx.drawImage(pic, this.x, this.y, 100, 100);
    }.bind(this), false)
  }

}