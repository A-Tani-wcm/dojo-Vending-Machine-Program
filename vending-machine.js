const drink = {
    greentea: [10, 120],
    cola: [10, 150],
    orange: [10, 300],
    cclemon: [10, 150],
    beer: [10, 50]
}


let u_money = 0;  //入れたお金
let total_u_money = 0; //投入した合計金額

//トータル金額確認（購入した場合は残りの金額）
function preview(total_u_money, u_money) {
    total_u_money += u_money;
    console.log(total_u_money);
    return total_u_money;
};

//ドリンクが選択された際に在庫を減らす&在庫有無確認
function select_drink(u_select){
    switch(u_select){
        case(drink.greentea):
        if(money_check(total_u_money) == "NG"){break;}else{ /* 投入金額が足りているかチェック */
            if(stock_check(drink.greentea[0]) == "NG"){break;}else{ /* 在庫が足りているかチェック */
            drink.greentea[0] -= 1;
            total_u_money -= drink.greentea[1];
            }
        }
            break;
            
        case(drink.cola):
        if(money_check(total_u_money) == "NG"){break;}else{
            if(stock_check(drink.cola[0]) == "NG"){break;}else{
            drink.cola[0] -= 1;
            total_u_money -= drink.cola[1];
            }
        }
            break;

        case(drink.orange):
        if(money_check(total_u_money) == "NG"){break;}else{
            if(stock_check(drink.orange[0]) == "NG"){break;}else{
            drink.orange[0] -= 1;
            total_u_money -= drink.orange[1];
        }
        }
            break;

        case(drink.cclemon):
        if(money_check(total_u_money) == "NG"){break;}else{
            if(stock_check(drink.cclemon[0]) == "NG"){break;}else{
            drink.cclemon[0] -= 1;
            total_u_money -= drink.cclemon[1];
            }
        }
            break;

        case(drink.beer):
        if(money_check(total_u_money) == "NG"){break;}else{
            if(stock_check(drink.beer[0]) == "NG"){break;}else{
            drink.beer[0] -= 1;
            total_u_money -= drink.beer[1];
            }
        }
            break;

        default:
            console.log(drink);
    }
    return "";
}



//在庫有無確認
function stock_check(num){
    console.log("\n★在庫有無確認★");
    if(num <= 0){
        console.log("sold out...残念！次がんばろう！！\n\n");
            return "NG";
    } else {
        console.log("You can buy! You are lucky!!\n\n");
    }
}

//投入金額の不足を確認
function money_check(t_mon){
    console.log("\n★お金不足確認★");
    if(drink.greentea[1] > t_mon || drink.cola[1] > t_mon || drink.orange[1] > t_mon || drink.cclemon[1] > t_mon || drink.beer[1] > t_mon){
        console.log("残金が不足しています。稼ぎましょう。Let's earn!\n\n")
        return "NG";
    }else{
        console.log("You are rich!!\n\n");
    }
    
}

//ドリンク一覧の表示
function list_drink(){
console.log("-----LIST of DRINKs-----");
for(const key in drink){
    console.log(`${key}: ${drink[key][1]}yen 残り${drink[key][0]}本`);
}
console.log("------------------------\n\n");
}


//buyボタンをクリックした時の処理
function clicked(drink_name){
    select_drink(drink[drink_name]);
    list_drink();
    clicked_charge();
}

//chargeボタンをクリックしたときの処理
function clicked_charge(){
let chrg = document.getElementById("charge");
u_money = Number(chrg.value); 
total_u_money += u_money;
console.log(`投入金額: ${u_money}`);
console.log(`合計投入金額: ${total_u_money}\n\n`);
//money_check(total_u_money);
chrg.value=0;
}


//価格の表示
let ad = [];
ad[0] = document.getElementById("greentea-price");
ad[1] = document.getElementById("cola-price");
ad[2] = document.getElementById("orange-price");
ad[3] = document.getElementById("cclemon-price");
ad[4] = document.getElementById("beer-price");

for(let i = 0; i < Object.values(drink).length; i++){
    ad[i].innerText = Object.values(drink)[i][1] + " yen";
}


//補充
function hoju(){
    console.log("\n-----補充-----");
    current_condition = [];    
    for(let i = 0; i < Object.values(drink).length; i++){
        current_condition[i] = [Object.keys(drink)[i], Object.values(drink)[i][0]];
        drink[Object.keys(drink)[i]][0] = 10;
        if(current_condition[i][1] != 10){ /* 補充前後で本数に差があれば補充したと判定 */
            console.log(`${current_condition[i][0]}を${10 - current_condition[i][1]}本補充しました。`)
        }
    }
    console.log("\n↓補充後↓");
    list_drink();
}
//console.log(drink);

//お釣り
function otsuri(){
    let otr = total_u_money;
    let otsuri_array = [
        [10000, 0],
        [5000, 0],
        [1000, 0],
        [500, 0],
        [100, 0],
        [50, 0],
        [10, 0],
        [5, 0],
        [1, 0]
    ]

    console.log("\n-----お釣り-----");
for(const element of otsuri_array){
    element[1] = Math.floor(total_u_money / element[0]);
    total_u_money = total_u_money % element[0];
    console.log(`${element[0]}円： ${element[1]}枚`);
}
console.log("\n---------------");
}
