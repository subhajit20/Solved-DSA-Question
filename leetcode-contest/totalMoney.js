var totalMoney = function totalMoney(n) {
    let day = 1;
    let total = 0;
    let totalInBank = 0;

    let doller = 1;
    let week = 7;

    while (day <= n) {
        if (day > week) {
            week = week + 7;
            doller = parseInt(week / 7);
            totalInBank = totalInBank + total + doller;
            doller++
            total = 0;
        } else {
            total = total + doller;
            doller++;
        }
        day++;
    }

    totalInBank = totalInBank + total;

    return totalInBank

};