const amount = document.getElementById('amount')
const year = document.getElementById('year')
const interestRate = document.getElementById('rate')
const form = document.querySelector('form')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const selectedType = document.querySelector('input[name="option"]:checked');
    const typeValue = selectedType ? selectedType.value : null;

// console.log(amount.value);
// console.log(year.value);
// console.log(interestRate.value);

// console.log(typeValue);

if(typeValue === 'repayment'){
    
    let monthlyRate = interestRate.value / 12 / 100
    
    let totalPayment = year.value * 12


    let upper = (1 + monthlyRate) ** totalPayment;

    let uppertwo = monthlyRate * upper

    
    let lower = upper - 1;
    

    let divide = (uppertwo / lower) * amount.value

    console.log(divide);
    
}
else if (typeValue === 'interest'){
     let monthlyRate = interestRate.value / 12 / 100
    
    let totalPayment = year.value * 12


    let upper = (1 + monthlyRate) ** totalPayment;

    let uppertwo = monthlyRate * upper

    
    let lower = upper - 1;
    

    let divide = (uppertwo / lower) * amount.value

    let allpayment = divide * totalPayment

    let interest = allpayment - amount.value

    console.log();
    
}

})



