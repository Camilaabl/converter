function convert (){
    let income = document.getElementsByClassName("income")[0].value;
let currency = document.getElementsByName("currency")[0];
let result = document.getElementsByClassName("outcome")[0];
const russia = 130;
const usa = 12700;
const europe = 13700;
if (currency.value == "ruble") {
    let otvet = income * russia
    result.value = `${otvet}`
    
    
} else {
    if (currency.value == "usd") {
   let otvet = income * usa
        result.value = `${otvet}`   
} else {
    if (currency.value == "euro") {
        let otvet = income * europe
        result.value = `${otvet}`  
}
}
}
}