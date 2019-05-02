var itemList;
var item;
var cell;

function preload(){
  itemList = loadJSON("items.json");
}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  item = new FoodItem("Food Item", "Test food item just so I can test this", 10, 4, 0);
  cell = new FoodCell(item);
  console.log(itemList[0].name);
}

function draw(){

  background(80);
  cell.show(mouseX, mouseY, window.innerWidth/2, 200);
}
