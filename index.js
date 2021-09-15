const game = {
  paused: true,
  frame: 0,
  breakOut: 0,
  user: "guest",
  score: 0
}
const van = new Van(14, 326)
const api = new ApiService("http://localhost:3000", "/locations/1")
orderedFunction(api.locationFetch, "location", "fetching location")
Dom.populateNav();
setInterval(Dom.refresh, 1000)


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
