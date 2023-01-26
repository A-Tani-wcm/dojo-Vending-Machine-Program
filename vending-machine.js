const  drink = {
    greentea: [10, 120],
    cola: [10, 150],
    orange: [10, 300],
    cclemon: [10, 150],
    beer: [10, 50]
}

let total_u_money = 0;
// お金入れる
let u_money = 200;

function preview(total_u_money, u_money) {
    total_u_money += u_money
    console.log(total_u_money)
    return total_u_money
};

// preview(total_u_money, 200);

function select_drink(u_select){
    switch(u_select){
        case(drink.greentea):
            drink.greentea[0] -= 1;
            check(drink.greentea[0]);
            console.log(drink.greentea[0]);
            break;
        case(drink.beer):
            drink.beer[0] -= 1;
            check(drink.beer[0]);
            console.log(drink.beer[0]);
            break;
        default:
            console.log(drink);
    }
}

// select_drink(drink.cola);

function check(num){
    if(num <= 0){
        console.log("sold out...残念！次がんばろう！！")
    } else {
        console.log("I got it! Your lucky!!")
    }
}

