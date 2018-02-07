// console.log('client sourced!');

// class Restaurant {
//     constructor() {
//         this.pizza = pizza;
//         this.order =order;
//     }

// }

class Pizza {
    constructor(ingredient1 = "cheese", ingredient2, size, crust) {
        this.ingredient1 = ingredient1;
        this.ingredient2 = ingredient2;
        this.size = size;
        this.crust = crust;
    }
}

let pepperoniPizza = new Pizza('pepperoni', 'sausage', 14, 'original');
console.log(pepperoniPizza);


class Order {
    constructor() {

    }
}