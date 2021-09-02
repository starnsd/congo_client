Dom.ctx.textAlign = "center";
Dom.ctx.fillStyle = "rgba(11,156,49,0.6";
Dom.ctx.fillRect(0, 0, 1500, 750);

const driver = new Driver(20, 20);
console.log(driver.east);
console.log(driver.image);
console.log(driver.x);
render(driver);

function render(obj) {
  const image = new Image();
  image.src = obj.image;
  image.addEventListener('load', function() {
    Dom.ctx.drawImage(image, obj.x, obj.y);
  }, false)
}

//const image = new Image();
//image.src = 'images/Vans/EastVanDriving.gif';
//image.addEventListener('load', function() {
//  Dom.ctx.drawImage(image, 1, 1);
//}, false)
//
//const driverImage = new Image();
//driverImage.src = 'images/Drivers/EastDriver.gif';
//driverImage.addEventListener('load', function() {
//  Dom.ctx.drawImage(driverImage, 1, 50);
//}, false)
//
//const houseImage = new Image();
//houseImage.src = 'images/Homes/HouseWestSelectedDog.gif';
//houseImage.addEventListener('load', function() {
//  Dom.ctx.drawImage(houseImage, 100, 0, 100, 100);
//}, false)
