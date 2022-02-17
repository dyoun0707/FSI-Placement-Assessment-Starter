// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Darryl Young" // HINT: Replace this with your own name!

credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
console.log('Btn')

const gbNum = document.querySelector('#minus-gb')
const ccNum = document.querySelector('#minus-cc')
const sugarNum = document.querySelector('#minus-sugar')
console.log('Num')

gbPlusBtn.addEventListener('click', function(){
    gb = gb +1
    console.log('gbcount')
    gbNum.textContent = gb
credit.textContent = gb + cc + sugar
})

ccPlusBtn.addEventListener('click', function(){
    cc = cc +1
    console.log('cccount')
    ccNum.textContent = cc
credit.textContent = gb + cc + sugar
})


sugarPlusBtn.addEventListener('click', function(){
    sugar = sugar +1
    console.log('sugarcount')
    sugarNum.textContent = sugar
credit.textContent = gb + cc + sugar
})

gbNum.addEventListener('click', function(){
    gb = gb -1
    console.log('gbcount')
    gbNum.textContent = gb
    credit.textContent = gb + cc + sugar
})

ccNum.addEventListener('click', function(){
    cc = cc -1
    console.log('cccount')
    ccNum.textContent = cc
credit.textContent = gb + cc + sugar
})


sugarNum.addEventListener('click', function(){
    sugar = sugar -1
    console.log('sugarcount')
    sugarNum.textContent = sugar
credit.textContent = gb + cc + sugar
console.log('countminus')
})

