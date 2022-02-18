let total_sum, countOfGoods, promocode;

total_sum = 1500;
countOfGoods = 11;
promocode = "ДАРИМ300";

function calculate(sum, goods, promo=null){
    if (promo == "ДАРИМ300" & sum >= 300){
        sum = sum - 300;
    }
    else if (promo == "ДАРИМ300"){
        sum = 0;
        return sum;
    }
    if (goods >= 10){
        sum = sum - (sum/100*5);
    }
    if (sum >= 50000){
        sum = sum - ((sum-50000)/100*20);
    }
    if (promo == "СКИДКА15" & sum >= 20000){
        sum = sum - (sum/100*15);
    }
    return sum;
}

console.log(`Начальная сумма покупки = ${total_sum}`);
console.log(`Конечная стоимость с учетом скидок = ${calculate(total_sum, countOfGoods, promocode)}`);