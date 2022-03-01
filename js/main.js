var elForm = document.querySelector(".convert__form")
var elInput = document.querySelector(".convert__input")
var elType = document.querySelector(".convert__type")
var elResult = document.querySelector(".convert__result")


// console.log(elForm,elInput,elType,elResult);

// Default values
var USD_TO_UZS = 10950.86;
var RUB_TO_UZS = 139.12;
var EUR_TO_UZS = 12231.34;


var javob = function (params) {
    
}

elForm.addEventListener("submit", function (event) {
    event.preventDefault


    var inputValue = elInput.value;
    var selectValue = elType.value;
    var result

    if (selectValue === "USD") {
       result = inputValue * USD_TO_UZS

    } if(selectValue === "RUB") {
        result = inputValue * RUB_TO_UZS

    }else{
        result = inputValue * EUR_TO_UZS
    }

    elResult.textContent = result
})
