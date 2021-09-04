Dom.ctx.textAlign = "center";


const van = new Van(20, 20);
const house = new House(100, 100, "south", 1);
const road = new Road(0, 350, "up")
console.log(road)
render(van);
render(house);

document.body.addEventListener("keydown", function(e) {
  let player = (van.isDriving ? van : Driver.all[0] )
  player.move(e.keyCode);
  if (!van.isDriving && player instanceof Driver) {
    van.buckleUp(player);
    House.all.forEach(house => house.makeDelivery(player))
  }
  Dom.ctx.clearRect(0,0, canvas.width, canvas.height);
  render(house);
  render(van);
  render(player);
  render(road);
})
// window.requestAnimationFrame()


function render(obj) {
  Dom.ctx.fillStyle = "rgba(11,156,49,0.6)";
  Dom.ctx.fillRect(0, 0, 1500, 750);
  Dom.ctx.fillStyle = "rgba(128,128,128, 100)"
  Dom.ctx.fillRect(0, 350, 500, 50)
  const {x, y, image} = obj
  const pic = new Image();
  pic.src = image;
  pic.addEventListener('load', function() {
    Dom.ctx.drawImage(pic, x, y, 100, 100);
  }, false)
}
