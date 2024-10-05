let output = document.getElementById("status");

const calculate = document.getElementById("solve");

erase.addEventListener("click",function(){
    output.value = "";
})
calculate.addEventListener("click",function(){
    output.value = eval(output.value);
})

function appendDisplay(number){
    output.value += number;                         

    
}
