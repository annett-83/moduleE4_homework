const Consumer = function(options){
    this.product = options.product
    this.energy = options.energy
    this.brandname = options.name
    //this.power = options.power
    this.plugged = options.plugged

}
Consumer.prototype.getPower = function(power){
    console.log(`Power is ${power} in Watt`)

}
Consumer.prototype.price = function () {
    console.log(this.product, ', this product on sale' )
}



// 1 Garet
const controller = new Consumer({product: 'controller', name: 'Lenovo', energy:'Battaries', plugged:false})
controller.prototype = Object.create(Consumer.prototype)
controller.prototype.constructor = controller

controller.getPower(45)
controller.price()
console.log(controller)

//2
const Dryer = function(options) {
    Consumer.apply(this, arguments)
    this.color = options.color
}

Dryer.prototype = Object.create(Consumer.prototype)
Dryer.prototype.constructor = Dryer

Consumer.prototype.price = function () {
    console.log(this.product, 'coast 333 yuan' )
}

Dryer.prototype.price = function () {
    Consumer.prototype.price.apply(this, arguments)
    console.log(this.product + 'not for sale')

}
const dryer = new Dryer({product: 'dryer', name: "Philips", energy: 'plugged', plugged: true, color: 'red'})

dryer.getPower(1400)
dryer.price()
console.log(dryer)

//3
const flashlight = new Consumer({product: 'flashlight', name: 'toshiba', energy:'Battaries', plugged:false})
flashlight.prototype = Object.create(Consumer.prototype)
flashlight.prototype.constructor = flashlight


flashlight.getPower(78)
flashlight.price()
console.log(flashlight)

//4

const Monitor = function(options){
    Consumer.apply(this, arguments)
    this.size = options.size
}

Monitor.prototype = Object.create(Consumer.prototype)
Monitor.prototype.constructor = Monitor

Consumer.prototype.price = function () {
    console.log(this.product, ', this product on sale' )
}

const monitor = new Monitor({product: 'Monitor', name: "Sony", energy: 'plugged',  plugged: true, size: '50 inches'})

monitor.getPower(2280)
monitor.price()
console.log(monitor)

// Maus ich verstehe von dem Zeug noch absolut NULL
// und ich muss jetzt noch zwei, drei Stunden pennen, sonst bin ich gleich komplett durch
// aber ich verstehe dein Problem... das ist eine komplett andere denke...
// aber deswegen macht man solche Übungen ja auch