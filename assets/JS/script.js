function incomeAmmount() {
    return parseFloat(document.getElementById('income').value);
}
let expenseValue = 0;
document.getElementById("calculate").addEventListener('click', function () {
    //incomeValue
    const incomeValue = incomeAmmount();
    const food = parseFloat(document.getElementById('food').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const others = parseFloat(document.getElementById('others').value);
    if (incomeValue <= 0 || isNaN(incomeValue)) {
        alert('Income must be typeof number and positive value');
    } else {

        // expense part --------------------
        if (food < 0 || isNaN(food) || (rent < 0 || isNaN(rent)) || (others < 0 || isNaN(others))) {
            alert(`Expense input must be positive or valid value`);
            expenseEmptyFieldSetup();
        }
        else {
            expenseValue = food + rent + others;
            if (incomeValue < expenseValue) {
                alert("Income can not be less than expense value!!")
                expenseEmptyFieldSetup();
            } else {
                let totalExpense = document.getElementById('total-expense');
                totalExpense.innerText = expenseValue;
                const balanceValue = balance();
                balanceValue.innerText = incomeValue - expenseValue;
            }
        }
    }
})

//Set Empty value of Expense input field

function expenseEmptyFieldSetup() {
    document.getElementById('food').value = '';
    document.getElementById('rent').value = '';
    document.getElementById('others').value = '';
}
//Set Empty value for saving input value
function savingInputValuSet() {
    document.getElementById('saving-value').value = '';
}

//Common balance Function
function balance() {
    const balance = document.getElementById('balance');
    return balance;
}

//saving part

const element = document.getElementById("save");

element.addEventListener('click', savingFunc);

function savingFunc() {
    console.log(expenseValue);
    const savingRate = parseFloat(document.getElementById('saving-value').value);
    const balanceValue = Number(balance().innerText);
    const incomeValue = incomeAmmount();
    //condition 
    if (savingRate < 0 || isNaN(savingRate)) {
        alert("Please enter a valid number");
    } else if (isNaN(incomeValue)) {
        alert("Please input an valid income ammount first");
        savingInputValuSet();
    }
    else {
        //saving ammount
        const savingsValue = document.getElementById('saving-ammount');
        const savingsAmmount = (incomeValue * savingRate) / 100;
        if (balanceValue == 0 && expenseValue == 0) {
            if (savingRate > 100) {
                alert("Saving value can not be bigger than 100");
                savingInputValuSet();
            }
            else {
                savingsValue.innerText = savingsAmmount;
                //remaining balance
                document.getElementById('remaining-balance').innerText = incomeValue - savingsAmmount;
            }
        }
        else if (balanceValue < savingsAmmount) {
            alert(`You don't have enough balance for saving ${savingRate}%`)
            savingInputValuSet();
        } else {
            savingsValue.innerText = savingsAmmount;
            //remaining balance
            document.getElementById('remaining-balance').innerText = (balanceValue - savingsAmmount).toFixed(1);
        }
    }
}