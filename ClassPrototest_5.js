class Consumer {
    constructor(options){
        this.product = options.product
        this.energy = options.energy
        this.brandname = options.name
        this.power = options.power
        this.plugged = options.plugged

    }
    price() {
        console.log(this.product, ', this product on sale')
    }

}
const controller = new Consumer({product: 'controller', name: 'Lenovo', energy:'battaries', plugged:false, power: '45 Watt'})

controller.price()
console.log(controller)

class Dryer extends Consumer{
    constructor(options) {
        super(options)

        this.color = options.color
    }

    price() {
        super.price()
        console.log(this.product + ' coasts 333 yuan')
    }
}
const dryer = new Dryer({product: 'dryer', name: "Philips", energy: 'plugged',  power: '1400 Watt', plugged: true, color: 'red'})

dryer.price()
console.log(dryer)

const flashlight = new Consumer({product: 'flashlight', name: 'Lenovo', energy:'battaries', plugged:false, power: '45 Watt'})

flashlight.price()
console.log(flashlight)

class Monitor extends Consumer{
    constructor(options) {
        super(options)

        this.size = options.size

    }

}

const monitor = new Monitor({product: 'Monitor', name: "Sony", energy: 'plugged',  plugged: true, power: '2800 Watt',  size: '50 inches'})


monitor.price()
console.log(monitor)


