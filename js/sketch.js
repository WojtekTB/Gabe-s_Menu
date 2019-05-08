var itemList;
var item;
var cell;

function preload(){
  itemList = loadJSON("https://api.myjson.com/bins/j8qc2");
}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  item = new FoodItem(itemList[0].name, itemList[0].description, itemList[0].price, itemList[0].stock , "https://i.imgur.com/CkSOAKF.png");
  cell = new FoodCell(item);
  console.log(itemList[0].name);
}

function draw(){

  background(80);
  cell.show(mouseX, mouseY, window.innerWidth/2, 200);
}
