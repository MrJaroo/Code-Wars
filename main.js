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


console.log(31 / 2);

words = word => {
    let rem = word.split("").reverse().join("");
    return rem;
}

console.log(words("hello"));

sringToNumber = (str) => {
    let num = Number(str);
    return num;
}

console.log(sringToNumber('1234'));
console.log('1234');

even_or_odd = number => {
    if (number % 2 === 0) return 'Even'

    else return 'Odd';
}

console.log(even_or_odd(2));

booleanToStirng = b => {
    return b.toString();
}

abbrevName = name => {
    return name.toUpperCase()
    .split(' ')
    .map(x => x[0])
    .join('.')
}

console.log(abbrevName('SAM SDFSF'))

let aName = 'Hello Parish'
let bName = aName.split(' ');
console.log(bName);




