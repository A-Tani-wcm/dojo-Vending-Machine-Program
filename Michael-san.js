function generateVendMachine() {
    const vendingMachine = {
        "balance": 0,
        getBalance: function() {return this.balance},
        setBalance: function(amountCash, mode="add") {
            if (mode == "add") {
                this.balance += amountCash;
                console.log(`Current Balance: ${this.getBalance()}`)
            } else if (mode == "subtract") {
                this.balance -= amountCash
                console.log(`Current Balance: ${this.getBalance()}`)
            }
            return;
        },
        receivePayment: function (inputPayment) {
            console.log(`Received: ${inputPayment}`);
            this.setBalance(inputPayment);
            return;
        },
        displayBalance: function() {
            console.log(`Current Balance: ${this.getBalance()}`)
            return;
        },
        dispenseDrink: function(drinkInteger) {
            if (this.inventory[drinkInteger]["stock"] !== 0){
                this.inventory[drinkInteger]["stock"] -= 1;
                console.log(`Here is your ${this.inventory[drinkInteger]["name"]}. Enjoy!`)
            }
            return
        },
        displayDrinks: function() {
            console.log("\n");
            console.log("Available Drinks:")
            for (drink in this.inventory){
                let inStockString = null;
                if (this.inventory[drink]["stock"] > 0){
                    inStockString = "In Stock";
                } else {
                    inStockBoolean = "Out of Stock";
                };
                console.log(`${this.inventory[drink]["name"]}: ${inStockString}`);
            };
            console.log("\n");
            return
        },
        makePurchase: function(drinkChoiceInteger) {
            if (typeof drinkChoiceInteger != "number") {
                console.log("Incorrect drink choice; Must input an integer.")
                return
            }
            const chosenDrink = this.inventory[drinkChoiceInteger];
            if (this.getBalance() >= chosenDrink["price"]) {
                this.dispenseDrink(drinkChoiceInteger);
                this.setBalance(chosenDrink["price"], mode="subtract");
            };
            return
        }
    };

    makeInventory(vendingMachine);

    return vendingMachine
}

function makeInventory(machineObj){
    machineObj["inventory"] = {
        1: {
            "name": "Kirin Lemon",
            "price": 98,
            "stock": 10
        },
        2: {
            "name": "Cola",
            "price": 108,
            "stock": 10
        },
        3: {
            "name": "Ginger Ale",
            "price": 115,
            "stock": 10
        },
        4: {
            "name": "Blue Mountain Coffee",
            "price": 200,
            "stock": 10
        },
    };

    return
}


const machine = generateVendMachine();

machine.displayDrinks();
machine.receivePayment(200);
machine.makePurchase(1)