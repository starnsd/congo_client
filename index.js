Dom.ctx.textAlign = "center";
Dom.ctx.fillStyle = "rgba(11,156,49,0.6";
Dom.ctx.fillRect(0, 0, 1500, 750);

const van = new Van(20, 20);
const driver = new Driver(van.x, van.y);
render(van);
render(driver);



function render(obj) {
  const {x, y, image, dx, dy} = obj
  const pic = new Image();
  pic.src = image;
  pic.addEventListener('load', function() {
    Dom.ctx.drawImage(pic, x, y, dx, dy);
  }, false)
}
