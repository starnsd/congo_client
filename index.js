Dom.ctx.textAlign = "center";
Dom.ctx.fillStyle = "rgba(11,156,49,0.6";
Dom.ctx.fillRect(0, 0, 1500, 750);

const driver = new Van(20, 20);
console.log(driver.image)
render(driver);

function render(obj) {
  const {x, y, image, dx, dy} = obj
  console.log(image);
  const pic = new Image();
  pic.src = image;
  pic.addEventListener('load', function() {
    Dom.ctx.drawImage(pic, x, y, dx, dy);
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
