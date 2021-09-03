Dom.ctx.textAlign = "center";
Dom.ctx.fillStyle = "rgba(11,156,49,0.6)";
Dom.ctx.fillRect(0, 0, 1500, 750);

const van = new Van(20, 20);
const house = new House(100, 100, "south");
render(van);
render(house);

document.body.addEventListener("keydown", function(e) {
  let player = (van.isDriving ? van : Driver.all[0] )
  player.move(e.keyCode);
  if (!van.isDriving && player instanceof Driver) {
    van.buckleUp(player);
  }
  Dom.ctx.clearRect(0,0, canvas.width, canvas.height);
  render(house);
  render(van);
  render(player);
})
// window.requestAnimationFrame()


function render(obj) {
  Dom.ctx.fillStyle = "rgba(11,156,49,0.6)";
  Dom.ctx.fillRect(0, 0, 1500, 750);
  const {x, y, image} = obj
  const pic = new Image();
  pic.src = image;
  pic.addEventListener('load', function() {
    Dom.ctx.drawImage(pic, x, y, 100, 100);
  }, false)
}
