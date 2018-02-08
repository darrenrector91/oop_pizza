// console.log('client sourced!');

class Pizza {
    constructor(ingredients = "cheese", size, crust, ingredientCount = ingredients.length) {
        this.ingredients = [ingredients];
        this.ingredientCount = ingredientCount;
    }

    ingredientCt() {
        return this.ingredientCount;
    }
}

let comboPizza = new Pizza(['pepperoni', 'sausage', 'mushroom'], 14, 'original');
console.log(comboPizza);

class Order extends Pizza {
    constructor(pizzaCount, cost, total = cost * pizzaCount) {
        console.log('inside orders');
        
        super(['pineapple']);
        this.pizzaCount = pizzaCount;
        this.cost = cost;
        this.total = total;

    }
    ingredientCt() {
        console.log(super.ingredientCt());
        console.log(`${this.ingredientCount} is the number of ingredients`);


    }
} 

let myPizza = new Order(2, 10.99);
console.log(myPizza);