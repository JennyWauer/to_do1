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