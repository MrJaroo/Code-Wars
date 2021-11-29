function one(n) {
    if (n <= 0) return n;
    else if (n >= 13) {
        return n - 2;
    }
    else {
        return n - 1;
    }
}

console.log(one(15));

function rentalCarCost(d) {
    if (d >= 3 && d < 6) {
        return (40 * d) - 20;
    }
    else if (d >= 7) {
        return (40 * d) - 50
    }

    else {
        return 40 * d;
    }

}

console.log(rentalCarCost(3));
console.log('Next')

century = year => {
    if (year.lenght < 3) {
        return 1;
    }
    else if (year % 100 === 0) {
        return year / 100
    }

    return Math.floor(year / 100) + 1

}

console.log(century(1601));

