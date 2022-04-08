function incomeAmmount() {
    return parseFloat(document.getElementById('income').value);
}

document.getElementById("calculate").addEventListener('click', function () {
    //incomeValue
    const incomeValue = incomeAmmount();
    console.log(incomeValue);
    if (incomeValue <= 0 || isNaN(incomeValue)) {
        alert('Income must be typeof number and positive value');
    } else {
        const food = parseFloat(document.getElementById('food').value);
        const rent = parseFloat(document.getElementById('rent').value);
        const others = parseFloat(document.getElementById('others').value);
        // expense part --------------------
        if (food <= 0 || isNaN(food) || (rent <= 0 || isNaN(rent)) || (others <= 0 || isNaN(others))) {
            alert(`Expense input must be positive or valid value`);
        }
        else {
            const expenseValue = food + rent + others;
            function expenseValueFunc(value) {
                return value;
            }
            expenseValueFunc(expenseValue);


            
            if (incomeValue < expenseValue) {
                alert("Income can not be less than expense value!!")
            } else {
                let totalExpense = document.getElementById('total-expense');
                totalExpense.innerText = expenseValue;
                const balanceValue = balance();
                balanceValue.innerText = incomeValue - expenseValue;
            }
        }
    }
})

function balance() {
    const balance = document.getElementById('balance');
    return balance;
}

//saving part

const element = document.getElementById("save");

element.addEventListener('click', savingFunc);

function savingFunc() {
    const savingRate = parseFloat(document.getElementById('saving-value').value);
    const balanceValue = Number(balance().innerText);
    const incomeValue = incomeAmmount();
    console.log(incomeValue);
    if (savingRate < 0 || isNaN(savingRate)) {
        alert("Please enter a valid number");
    } else if (isNaN(incomeValue)) {
        alert("Please input an valid income ammount first");
    }
    else {
        //saving ammount

        const savingsValue = document.getElementById('saving-ammount');
        const savingsAmmount = (incomeValue * savingRate) / 100;
        console.log(expenseValueFunc());
        if (balanceValue == 0) {
            savingsValue.innerText = savingsAmmount;
            //remaining balance
            document.getElementById('remaining-balance').innerText = incomeValue - savingsAmmount;
        }
        else if (balanceValue < savingsAmmount) {
            alert(`You don't have enough balance for saving ${savingRate}%`)
        } else {
            savingsValue.innerText = savingsAmmount;
            //remaining balance
            document.getElementById('remaining-balance').innerText = balanceValue - savingsAmmount;
        }
        savingRate.value = '';
    }
}