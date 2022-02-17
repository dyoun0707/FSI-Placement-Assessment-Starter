// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Darryl Young" // HINT: Replace this with your own name!

credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const gbPlusBtn = document.querySelector('#gingerbread')
const ccPlusBtn = document.querySelector('#chocolatechip')
const sugarPlusBtn = document.querySelector('#sugarsprinkle')
console.log('Btn')

const gbNum = document.querySelector('#gbNum')
const ccNum = document.querySelector('#ccNum')
const sugarNum = document.querySelector('#sugarNum')
console.log('Num')

gbPlusBtn.addEventListener('click', function(){
    gb = gb +1
    console.log('gbcount')
    gbNum.textContent = gb
})

ccPlusBtn.addEventListener('click', function(){
    cc = cc +1
    console.log('cccount')
    ccNum.textContent = cc
})


sugarPlusBtn.addEventListener('click', function(){
    sugar = sugar +1
    console.log('sugarcount')
    sugarNum.textContent = sugar
})

gbPlusBtn.addEventListener('click', function(){
    gb = gb -1
    console.log('gbcount')
    gbNum.textContent = gb
})

ccPlusBtn.addEventListener('click', function(){
    cc = cc -1
    console.log('cccount')
    ccNum.textContent = cc
})


sugarPlusBtn.addEventListener('click', function(){
    sugar = sugar -1
    console.log('sugarcount')
    sugarNum.textContent = sugar
})

