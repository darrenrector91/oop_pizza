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

let pepperoniPizza = new Pizza();
let comboPizza = new Pizza('pepperoni', 'sausage', 14, 'original');
console.log(pepperoniPizza);
console.log(comboPizza);



class Order {
    constructor(numberPizzas, cost, total = cost * numberPizzas) {
        this.numberPizzas = numberPizzas;
        this.cost = cost;
        this.total = total;
        
    }
}

let myPizza = new Order(2, 10.99);
console.log(myPizza);
