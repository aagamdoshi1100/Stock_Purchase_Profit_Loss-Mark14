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

        Calculator(Buying,Q,t);

   }



function Calculator(Buy,Quan,Curr){

    if (Buy != "" && Quan !="" && Curr !=""){
 

    if (Buy < Curr){
        Profit = (Curr-Buy)*Quan;
        console.log("ggg");
        ProfitPercentage = (Profit*100/Buy)*Quan;
        var Message = "You profit is "+ Profit+" $ and profit percentage is "+ProfitPercentage;
        var color = "green";
        ShowMessage(Message,color);
    }else if(Buy > Curr){
        Loss = (Buy-Curr)*Quan;
        LossPercentage = (Loss/Buy*100)*Quan;
        var Message = "You Loss is "+Loss+" $ and Loss percentage is "+LossPercentage;
        var color = "red";
        ShowMessage(Message,color);
    }else{
        var Message = "No Pain no gain";
        var color = "blue";
        ShowMessage(Message,color);
    }
}else{
    var message = "Input fields cannot be null";
    var color = "#f54211";
    ShowMessage(message,color);
}
}


function ShowMessage(message,colorOf){

 Output.innerText = message;   

 Output.style.color = colorOf;

}