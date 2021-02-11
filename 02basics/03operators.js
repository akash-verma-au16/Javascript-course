var sellPrice = 199;
var listPrice = 799;

var discount = ((listPrice - sellPrice) / listPrice ) * 100;

var displayDiscount = Math.round(discount);

console.log("Discount is:",displayDiscount,"% OFF");

var result = listPrice > sellPrice;

console.log(typeof result);