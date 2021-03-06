// set & swap
setSwap()

function setSwap() {
    let myNumber = 42
    let myName = "Jenny"
    let temp = myNumber
    myNumber = myName
    myName = temp
    temp = myName
    myName = myNumber
    myNumber = temp

}

// print one

printOne()

function printOne() {
    for (var num=-52; num<1067; num++) {
        console.log(num)
    }
}

// be happy

beCheerful()

function beCheerful() {
    const greeting = "good morning!"
    let num = 1
    while (num < 99) {
        console.log(greeting)
        num+= 1
    }
}

// multiples

multiples()

function multiples() {
    for(var num=-300; num<1; num++){
        if(num != -3){
            if(num != -6){
                console.log(num);
            }
        }
    }
}

// whileInt

whileInt()

function whileInt(){
    num = 2000
    while(num < 5281){
        console.log(num)
        num += 1;
    }
}

// birthday

function birthday(numOne, numTwo){
    if ((numOne == 7 && numTwo == 14) || (numTwo == 7 || numOne == 14) || (numOne == 14 && numTwo == 7) || (numTwo == 14 || numOne == 7)){
        console.log("How did you know?");
    }
    else {
        console.log("Just another day...");
    }
}

birthday(7,14)
birthday(14,7)
birthday(4,5)

// leap year

function leapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0) {
            if (year % 400 == 0){
                console.log("Leap Year")
            }
        else {
            console.log("Leap Year")
        }
        }
    }
}

leapYear(200)
leapYear(2008)
leapYear(400)

// print & count

printCount()

function printCount(){
    count = 0
    for(var num = 512; num < 4097; num++){
        if(num % 5 == 0){
            console.log(num)
            count += 1
        }
    }
    console.log(count)
}

// multiplesSix

multiplesSix()

function multiplesSix(){
    num = 0
    while(num<60001){
        if(num % 6 == 0){
            console.log(num)
        }
        num += 1
    }
}

// Coding Dojo

codingDojo()

function codingDojo(){
    for(var num=1; num<101; num++){
        if(num % 5 == 0){
            if(num % 10 == 0){
                console.log("Coding Dojo")
            }
            else{
                console.log("Coding")
            }
        }
        else {
            console.log(num)
        }
    }
}

// know

know(8)
know("Hello")
know("world")

function know(incoming){
    console.log(incoming)
}

// odds

odds()

function odds(){
    let count = 0
    for(var num=-300000; num<300001; num++){
        count += 1
    }
    console.log(count)
}

// countdown

countdown()

function countdown(){
    for(var num=2016; num>0; num--){
        if(num % 4 == 0){
            console.log(num)
        }
    }
}

// countdownFlex

countdownFlex(3,58, 3)

function countdownFlex(lowNum, highNum, mult){
    for(var num=highNum; num>lowNum; num--){
        if(num % mult == 0){
            console.log(num)
        }
    }
}

// finalCountdown NOT WORKING

finalCountdown(3,37,4,9)

function finalCountdown(param1, param2, param3, param4){
    num = param2
    while(num > param3){
        if(num % param1 == 0){
            if(num % param4 == 0) {
                num -= 1
            }
            else{
                console.log(num)
                num -= 1
            }
        }
    }
}