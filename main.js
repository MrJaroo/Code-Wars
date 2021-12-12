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


let count = 0;
function cc(card) {
    let cards = /[JQKA]/;
    if (card > 1 && card < 7) count++
    else if (card === 10 || cards.test(card)) count--

    if (count > 0) return `${count} Bet`
    return `${count} Hold`

}

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U')
}
console.log(DNAtoRNA('StsdfTT'));

function boolToWord(bool) {
    // if (bool == true) {
    //     return "Yes"
    // }
    // else if (bool == false) return "No"
    // let a = '';
    // switch(bool) {
    //     case true: {
    //         a = 'Yes'
    //         break
    //     }
    //     case false: {
    //         a = 'No'
    //         break
    //     }
    // }
    // return a;
    return bool ? 'Yes' : 'No';
}
console.log(boolToWord(true));


numberToString = num => {
    return num.toString();
}
console.log(numberToString(12));

cockroachSpeed = s => Math.floor((s * 100) / 3.6);
console.log(cockroachSpeed(1.01));

const otherAngel = (a, b) => 180 - a - b;
console.log(otherAngel(43, 78));

function twiceAdOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld * 2));
}
console.log(twiceAdOld(36, 7));

function getVolumeOfCuboid(letgth, width, height) {
    return letgth * width * height;
}
console.log('Cuboid')
console.log(getVolumeOfCuboid(6.3, 2, 5))

function nthEven(n) {
    return (n * 2) - 2;
}
console.log(nthEven(1298734))

function time(h, m, s) {
    return (h * 3600000) + (m * 60000) + (s * 1000)
}

console.log(time(0, 1, 1))

multiplication = number => {
    if (number % 2 === 0) {
        return number * 8
    }
    else {
        return number * 9;
    }
}

console.log(multiplication(5))

function areaOrPerimeter(l, w) {
    // if(l == w) {
    //     return l * w
    // }
    // else {
    //     return 2 * (l + w);
    // }
    return l == w ? l * w : 2 * (l + w);
}

console.log("areaOrPerimeter")
console.log(areaOrPerimeter(5, 5))

isDivisivle = (n, x, y) => {
    // if(n % x == 0 && n % y == 0){
    //     return true
    // }

    // else {
    //     return false
    // }

    return n % x == 0 && n % y == 0 ? true : false;

}
console.log('isDivisivele')
console.log(isDivisivle(12, 3, 4))

doubleTnteger = i => i * 2;
console.log('doubleTnteger')
console.log(doubleTnteger(2));

makeNegative = num => num < 0 ? num : num / -1
console.log(makeNegative(-56))

addFive = num => num + 5;
console.log(addFive(5));

move = (position, roll) => {
    return (roll + roll) + position;
}
console.log(move(0, 4));

repeatStr = (n, s) => {
    let star = ''
    for (let i = 0; i < n; i++) {
        star += s
    }
    return star
}
console.log(repeatStr(10, "*"));


// function isCoprime(x, y) {
//     let a = [];
//     let b = [];
//     for (let i = 0; i <= x; i++) {
//         if (x % i == 0) {
//             a.push(i)
//         }
//     }
//     for (let i = 0; i <= y; i++) {
//         if (y % i == 0) {
//             b.push(i);
//         }
//     }
//     let ab = a.concat(b);
//     let duplicates = [];

// }
// console.log(isCoprime(20, 27))

let buttonCard = document.querySelector('.btn-card');
let inputCard = document.querySelector('.card');
let outCard = document.querySelector('.out-card')



function t1() {
    let val = inputCard.value;

    let a = inputCard.value.split(/(\d{4})/g);
    let b = a.join(' ')

    outCard.innerHTML = b;
    console.log(val.lenght)
}

buttonCard.onclick = t1;


function expressionMatter(a, b, c) {
    return Math.max(a * (b + c), a * b * c, (a + b) * c, a + b + c)
}
console.log(expressionMatter(5, 1, 3))

oppsite = number => number > 0 ? -Math.abs(number) : Math.abs(number)
console.log(oppsite(-344));

lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;
console.log(lovefunc(0, 1));

liters = time => {
    return Math.floor(time * 0.5);
}
console.log('Liters')
console.log(liters(1))

square = num => Math.pow(num, 2);
console.log(square(3));

bettwen = (a, b) => {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr;
}

console.log(bettwen(-2, 5));

pipeFix = numbers => {
    let a = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        a.push(i)
    }
    return a

}

console.log(pipeFix([1, 2, 3]));

bump = x => {
    let a = x.split('');
    let num = 0;
    for (let i in a) {
        if(a[i] == 'n'){
            num++
        }
        
    }

    if(num > 15){
        return 'Car Dead'
    }
    else return 'Woohoo!'
}

console.log(bump('__nnn__nnn__nnn__n_nnnn_n'))

hoopCount = n => {
    if(n >= 10) return "Great, now move on to tricks"
    else return 'Keep at it untill you get it'
}

console.log(hoopCount(3))
console.log(hoopCount(11))

const binaryArrayToNumber = arr => {

}

console.log(72 % 13)