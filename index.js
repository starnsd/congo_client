Dom.ctx.textAlign = "center";
const game = {
  paused: false,
  frame: 0
}

const van = new Van(14, 326);
Location.createHouses()
Location.paint()



document.body.addEventListener("keydown", function(e) {
    let player = (van.isDriving ? van : Driver.all[0] )
    player.move(e.keyCode);
    if (!van.isDriving && player instanceof Driver) {
      van.buckleUp(player);
      House.all.forEach(house => house.makeDelivery(player))
    }
  Location.stateChange = true
  Location.paint()
})



