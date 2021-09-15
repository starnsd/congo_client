const game = {
  paused: true,
  frame: 0,
  breakOut: 0,
  user: "guest",
  score: 0,
  intervalId: 0,
  gamesPlayed: 0
}
const van = new Van(14, 326)
const api = new ApiService("http://localhost:3000", "/locations/1")
orderedFunction(api.locationFetch, "location", "fetching location")
Dom.populateNav();
game.intervalId = setInterval(Dom.refresh, 1000)


function startTheGame() {
  if (Location.all.length > 0) {
    delete Location.all[0]
    Location.all = [];
  }
  game.gamesPlayed++
  orderedFunction(api.locationFetch, "location", "fetching location")
  Dom.populateNav();
  game.breakOut = 0
  game.intervalId = setInterval(Dom.refresh, 1000)
}

async function orderedFunction(func, key, message, ...args) {
  console.log(message)
  console.log(...args)
  if (args.length > 0) {
    const result = await func(...args)
    console.log(result);
    api[`${key}`] = result;
    return result;
  } else {
    const result = await func();
    console.log(result);
    api[`${key}`] = result;
    return result;
  }

}
