var Buyprice = document.querySelector('#Buy-Price');
var quantity = document.querySelector('#Quantity');
var Currentprice = document.querySelector('#Current-Price');
var Btn = document.querySelector('#Check');
var Output = document.querySelector('#Output');


Btn.addEventListener("click",clickHandler);


function clickHandler(){

    var Buying = Buyprice.value;
    var Q = quantity.value;
    var t = Currentprice.value;
console.log("Buying");
    Calculator(Buying,Q,t);
}


function Calculator(Buy,Quan,Curr){

    if (Buy < Curr){
        Profit = (Buy-Curr)*Quan;
        ProfitPercentage = (Buy/Curr)*Quan;
        var Message = "You profit is $Profit and profit percentage is $ProfitPercentage";
        ShowMessage(Message);
    }else if(Buy > Curr){
        Loss = (Buy-Curr)*Quan;
        LossPercentage = (Buy/Curr)*Quan;
        var Message = "You Loss is $Loss and Loss percentage is $LossPercentage";
        ShowMessage(Message);
    }else{
        var Message = "No Pain no gain";
        ShowMessage(Message);
    }

}


function ShowMessage(message){

 Output.innerText = message;   

}