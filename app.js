var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfnotes = document.querySelectorAll(".no-of-notes");

var returnChange = document.querySelector("#returnAmount");

var availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value > billAmount.value){
            var amountToBeReturned = cashGiven.value - billAmount.value;
            returnAmount.innerHTML = "The amount to be returned is: ₹" + amountToBeReturned;
            calculateChange(amountToBeReturned);
        }
       else{
           showMessage("give more cash");
       }
    }
    else{
        showMessage("Enter a POSITIVE Bill Amount.")
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

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.style.backgroundColor = "red";
    message.style.color = "white";
    message.style.padding = "1rem";
    message.style.border = "2px solid white";
    message.style.borderRadius = "2rem";
    message.innerHTML = msg;
}