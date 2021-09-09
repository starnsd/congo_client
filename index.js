const game = {
  paused: false,
  frame: 0
}
const api = new ApiService("http://localhost:3000", "/locations/1")
const level = api.locationFetch()

Dom.populateNav()
document.getElementById("formpop").addEventListener("submit", (e) => {
  e.preventDefault()
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  if (!!document.getElementById("email")) {
    let email = document.getElementById("email").value
    let passwordConfirmation = document.getElementById("password_confirmation").value
    api.createUserFetch(username, email, password, passwordConfirmation)
  } else {
    api.
  }
})





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



