const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelector(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


function calculateChange(amountToBeReturned){

    for(let i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        numberOfNotes[i].innerText = numberOfNotes;   
    }
}


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    if(billAmount.value > 0){
        if(cashGiven.value > billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            console.log("error");
        }
    }
    else{
        message.style.display="block";
        message.innerHTML = "the bill amount should be greater than 0"
        // alert("invalid cash given.");
    }
});

