const game = {
  paused: false,
  frame: 0,
  user: "guest"
}
const api = new ApiService("http://localhost:3000", "/locations/1")
const level = orderedFunction(api.locationFetch, "location", "fetching location")
Dom.populateNav();


async function orderedFunction(func, key, message = "no message") {
  console.log(message)
  const result = await func();
  console.log(result);
  api[`${key}`] = result
  return result;
}





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



