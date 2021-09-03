Dom.ctx.textAlign = "center";
Dom.ctx.fillStyle = "rgba(11,156,49,0.6)";
Dom.ctx.fillRect(0, 0, 1500, 750);

const van = new Van(20, 20);
const driver = new Driver(van);
const house = new House(100, 100);
render(van);
render(driver);
render(house);

document.body.addEventListener("keydown", function(e) {
  console.log(e.keyCode);
  driver.move(e.keyCode);
  Dom.ctx.clearRect(0,0, canvas.width, canvas.height)
  render(driver);
  // e.keyCode == 32 is spacebar
  // e.keyCode == 16 is Lshift
})


// ctx.clearRect(0,0, canvas.width, canvas.height) clears all drawings on canvas
// window.requestAnimationFrame()


function render(obj) {
  Dom.ctx.fillStyle = "rgba(11,156,49,0.6)";
  Dom.ctx.fillRect(0, 0, 1500, 750);
  const {x, y, image, dx, dy, name} = obj
  const pic = new Image();
  pic.src = image;
  pic.id = name;
  console.log(name)
  pic.addEventListener('load', function() {
    Dom.ctx.drawImage(pic, x, y, dx, dy);
  }, false)
}
