class FoodItem{
  constructor(name, description, price, stockCount, image){
    this.name = name;//item name
    this.description = description;//item description
    this.price = price;//item price
    // let placeholder;
    // loadImage(image, function(i){
    //   placeholder = i;
    //   console.log(i);
    // }, function(e) {
    //   console.log("didn't load");
    //   console.log(e);
    // })//image of an item
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function() { ctx.drawImage(img, 0, 0); };
    img.src = image;

    this.image = img;
    this.sale = false;//is on sale?
    this.discountPer = 0;//discount in % of the full price
    this.stockCount = stockCount;//how much of this item is left
  }

  setDiscount(discountPercentage){
    this.discountPer = discountPercentage;
    this.sale = true;
  }

  removeDiscount(){
    this.discountPer = 0;
    this.sale = false;
  }

}

class FoodList{

}

class FoodCell{
  constructor(item){
    this.item = item;
  }

  show(x, y, w, h){
    stroke(3);
    fill(255);
    rect(x, y, w, h);
    noStroke();
    fill(0);
    text(this.item.name, x + 10, y + 10, 200, 200);
    console.log(this.image);
    text(this.item.description, x + 10, y + 30, w - image.width*1.5, 200);
    text("$" + this.item.price, (x + w) - (this.item.price.toString().length * 12), y + 10, 200, 200);
    // image(this.image, mouseX, mouseY);
  }
}
