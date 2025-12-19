



// CLOSURES
//Exercise level 1
//1
function outFunc(){
    let sum = 0

    function innerFunc(){
        sum +=2

        return sum
    }
return innerFunc
}  
const innerFunction = outFunc()
console.log(innerFunction())
console.log(innerFunction())


// Exercise Level 2
// 1
function parent (){
    let total = 0

    function firstChild (){
        total ++

        return total
    }

    function secChild(){
        total += 2

        return total
    }

    function thirdChild(){
        total 

        return total
    }

    return{
        first:firstChild(),
        second: secChild(),
        third: thirdChild()
    }
}

const innerFuncs1 = parent()

console.log(innerFuncs1.first)
console.log(innerFuncs1.second)
console.log(innerFuncs1.third)


// Exercise Level 3
// 2
function personAccount (){
    const firstName = 'Rofiat'
    const lastName = 'Akintunde'
    const incomes = []
    const expenses = []


    function totalIncome(){

    }

    function totalExpenses (){
        totalExp = expenses.reduce()
    }

    function accountInfo(){

    }

    function addIncome(){

    }

    function addExpense(){

    }


    function accountBalance(){

    }

    return{
        totalIncome,
       totalExpenses,


    }
}