// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Darryl Young" 

credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')

const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')

const gbNum = document.querySelector('#qty-gb')
const ccNum = document.querySelector('#qty-cc')
const sugarNum = document.querySelector('#qty-sugar')

const total = document.querySelector('#qty-total')

gbPlusBtn.addEventListener('click', function(){
    gb = gb +1
    console.log('gbcount')
    gbNum.textContent = gb
total.textContent = (gb + cc + sugar);
})

ccPlusBtn.addEventListener('click', function(){
    cc = cc +1
    console.log('cccount')
    ccNum.textContent = cc
total.textContent = (gb + cc + sugar);
})


sugarPlusBtn.addEventListener('click', function(){
    sugar = sugar +1
    console.log('sugarcount')
    sugarNum.textContent = sugar
total.textContent = (gb + cc + sugar);
})

gbMinusBtn.addEventListener('click', function(){
    gb = gb -1
    console.log('gbcount')
    gbNum.textContent = gb
    total.textContent = (gb + cc + sugar);
})

ccMinusBtn.addEventListener('click', function(){
    cc = cc -1
    console.log('cccount')
    ccNum.textContent = cc
total.textContent = (gb + cc + sugar);
})


sugarMinusBtn.addEventListener('click', function(){
    sugar = sugar -1
    console.log('sugarcount')
    sugarNum.textContent = sugar
total.textContent = (gb + cc + sugar);
console.log('countminus')
})

