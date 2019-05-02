class FoodItem{
  constructor(name, description, price, stockCount, image){
    this.name = name;//item name
    this.description = description;//item description
    this.price = price;//item price
    this.image = image;//image of an item
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
    text(this.item.description, x + 10, y + 30, 200, 200);
    text("$" + this.item.price, (x + w) - (this.item.price.toString().length * 12), y + 10, 200, 200);
  }
}
