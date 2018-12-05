function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}
Phone.prototype.printInfo = function () {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung", 1748, "gold");
var iPhone6S = new Phone("Apple", 1948, "pink");
var OnePlusOne = new Phone("OnePlus One", 1299, "black");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();
