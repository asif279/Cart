document.getElementById("caseIncrease").addEventListener("click",function(){
handleProductPrice(true);
});
document.getElementById("caseDecrease").addEventListener("click",function(){

    handleProductPrice(false);
    });

    function handleProductPrice(isIncrease){

        var caseInput= document.getElementById("case-count");
        var caseCount = parseInt(caseInput.value);

            var caseNewCount = caseCount;
            if(isIncrease == true ){
                caseNewCount =caseCount +1;
            }
            else if(isIncrease == false && caseNewCount>0 ){
                caseNewCount =caseCount - 1;
            }
caseInput.value= caseNewCount;
var total = caseNewCount * 1259;

var price = document.getElementById("casePrice").innerHTML= "$" +total;
calculateCost ();
    };

    document.getElementById("caseIncrease1").addEventListener("click",function(){
        handleProductPricee(true);
        });
        document.getElementById("caseDecrease1").addEventListener("click",function(){
        
            handleProductPricee(false);
            });
            function handleProductPricee(isIncrease){

                var caseInput= document.getElementById("case-count1");
                var caseCount = parseInt(caseInput.value);
        
                    var caseNewCount = caseCount;
                    if(isIncrease == true ){
                        caseNewCount =caseCount +1;
                    }
                    else if(isIncrease == false && caseNewCount>0 ){
                        caseNewCount =caseCount - 1;
                    }
        caseInput.value= caseNewCount;
        var total = caseNewCount * 59;
        
        var price = document.getElementById("casePrice1").innerHTML= "$" +total;
        calculateCost ();
            };


            function calculateCost (){

                var phone = document.getElementById("case-count");
                var phoneCount = parseInt(phone.value);

                var case1 = document.getElementById("case-count1");
                var phoneCount1 = parseInt(case1.value);

                var totalPrice = phoneCount *1259 + phoneCount1 *59;
                var subtotal = document.getElementById("col1").innerHTML = "$" + totalPrice;

                var taxI = totalPrice * 0.1;
                var tax = parseInt(taxI);
                
                                 document.getElementById("col3"),innerHTML = "$" + taxI;
                  
                var total = document.getElementById("col").innerText = "$" + totalPrice;


            }
            

