var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var NoOfNotes = document.querySelectorAll(".no-of-notes")

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display = "none";
    if(billAmount.value > 0 && cashGiven.value > billAmount.value){
        if(cashGiven.value > billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("The Given Cash should be greater than or equal to the Bill Amount")
        }
    }
    else{
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned){

    for(let i=0; i < availableNotes.length; i++){
        var NoOfNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        NoOfNotes[i].innerHTML = NoOfNotes;   
    }
}
function showMessage(msg){
    message.style.display="block";
    message.innerHTML = msg;
    // alert("invalid cash given.");
}