// Section 1
// Question 1
let laptop = {
    brand: "Lenovo",
    price: 49990,
    start: function () {
        console.log("Sale started for brand " + this.brand + " at price " + this.price)
    },
    inflate: function () {
        console.log("old price is " + this.price)
        this.price = 49990 + 100
        console.log("Inflation happening new price is " + this.price)
    }
}

laptop.start()
laptop.inflate()

// To get multiple laptop of same strcture i need to create multiple same object which is very in efficient
// so we can create a constructor function instead and call it with the brand and price

// single laptops function to construct all the this context
function laptops(name, price) {
    this.name = name
    this.price = price
}

laptops.prototype.message = function () {
    console.log("Name " + this.name + " Price " + this.price)
}

const lenovo = new laptops("lenovo", 49990)
const asus = new laptops("asus", 50000)

lenovo.message()
asus.message()