const game = {
  paused: false,
  frame: 0
}
const api = new ApiService("http://localhost:3000", "/locations/1")
const level = api.locationFetch()







//Dom.ctx.textAlign = "center";
//const van = new Van(14, 326);
//const firstLocation = new Location(level)
//document.body.addEventListener("keydown", function(e) {
//    let player = (van.isDriving ? van : Driver.all[0] )
//    player.move(e.keyCode);
//    if (!van.isDriving && player instanceof Driver) {
//      van.buckleUp(player);
//      House.all.forEach(house => house.makeDelivery(player))
//    }
//  firstLocation.stateChange = true
//  firstLocation.paint()
//})



