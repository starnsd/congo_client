Dom.ctx.textAlign = "center";
const game = {
  paused: false,
  frame: 0
}



const van = new Van(14, 326);
new House(475, 14, "south", 1);
new House(550, 14, "south", 0);
new House(625, 14, "south", 0);
new House(700, 14, "south", 1);
new House(775, 14, "south", 0);
new House(850, 14, "south", 0);
new House(925, 14, "south", 0);
new House(1000, 14, "south", 1);
new House(1075, 14, "south", 0);
new House(1150, 14, "south", 0);
new House(1225, 14, "south", 1);
new House(1360, 100, "west", 1);
new House(1360, 175, "west", 0);
new House(1360, 250, "west", 1);
new House(1360, 325, "west", 0);
new House(1360, 400, "west", 0);
new House(1360, 475, "west", 0);
new House(1360, 550, "west", 1);
const road = new Road(0, 350, "up")
console.log(road)
render(van);
House.all.forEach(house => render(house))

document.body.addEventListener("keydown", function(e) {
    let player = (van.isDriving ? van : Driver.all[0] )
    player.move(e.keyCode);
    if (!van.isDriving && player instanceof Driver) {
      van.buckleUp(player);
      House.all.forEach(house => house.makeDelivery(player))
    }
    //Dom.ctx.clearRect(0,0, canvas.width, canvas.height);
    //House.all.forEach(house => render(house));
    //render(van);
    //render(player);
})

function paint() {
  game.frame++
  Dom.ctx.clearRect(0,0, canvas.width, canvas.height);
  House.all.forEach(house => render(house));
  render(van)
  let player = (!!Driver.all[0] ? Driver.all[0] : false)
  if (!!player) {
    render(player);
  }
  console.log(game.frame)
  window.requestAnimationFrame(paint)
}
window.requestAnimationFrame(paint)

// window.requestAnimationFrame()


function render(obj) {
  let sprites = [];
  Dom.ctx.fillStyle = "rgba(11,156,49,0.6)";
  Dom.ctx.fillRect(0, 0, 1500, 750);
  Dom.ctx.fillStyle = "rgba(128,128,128, 100)"
  Dom.ctx.fillRect(0, 350, 500, 50); //road
  Dom.ctx.fillRect(500, 125, 50, 500); //road
  Dom.ctx.fillRect(550, 125, 800, 50); //road
  Dom.ctx.fillRect(1300, 125, 50, 500); //road
  Dom.ctx.fillRect(550, 575, 800, 50);  //road

  const {x, y, image} = obj
  const pic = new Image();
  pic.src = image;
  pic.addEventListener('load', function() {
    sprites.push({pic, x, y});
  }, false)
  sprites.forEach(sprite => draw(sprite))
}

function draw(obj) {
  const {pic, x, y} = obj;
  Dom.ctx.drawImage(pic, x, y, 100, 100); 
}
