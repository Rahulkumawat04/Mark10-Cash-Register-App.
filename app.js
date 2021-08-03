var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfnotes = document.querySelectorAll(".no-of-notes")

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    if(billAmount.value > 0){
        if(cashGiven.value > billAmount.value){
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
       else{
           console.log("give more cash");
       }
    }
    else{
        console.log("Enter a POSITIVE Bill Amount.")
    }
    
});

function calculateChange(amountToBeReturned){
    for(let i=0; i < availableNotes.length; i++){
        var numberOfnotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );

        amountToBeReturned %= availableNotes[i];

        noOfnotes[i].innerHTML = numberOfnotes; 
    }
}
