const numbers = document.querySelectorAll(".button")
let result = document.querySelector(".disPlay")
const reset = document.querySelector(".buttonC")
const clear = document.querySelector(".buttonDel")
const operators = document.querySelectorAll(".buttonOp")
const equalOp = document.querySelector(".buttonEq")
let val1 = ''
let omar = ''
let val2 = ''
function functionreset(){
    return  result.innerText = ''
     
  }

  
  function clearance(){

    if(result === ""){
        return false;
    }
    let remind = result.innerText.substring(0,result.innerText.length - 1)
    result.innerText = ''
    result.append(remind)
   
    }
    function calculate(num1, op, num2){
        if (op == '+') {
            return Number(num1) + Number(num2);
              
          } else if (op == '-') {
            return num1 - num2;
          } else if (op == '*') {
            return num1 * num2;
          } else if (op == '/') {
            return num1 / num2;
          }
    }
  
for(let number of numbers){
    number.addEventListener('click',function(){
    if(result.innerText == ''){
        result.innerText = this.innerText
    }else{
        result.innerText += this.innerText
    }

    })
}
for(let operator of operators){
    
    operator.addEventListener('click',function(){
        if(result.innerText == ''){
            return false;
        }else{
            val1 = result.innerText
            console.log("===========>",val1)
            functionreset()
            omar = operator.innerText
            console.log("=================>",omar)
        }  
    })
}

reset.addEventListener('click',functionreset)
clear.addEventListener('click',clearance)
equalOp.addEventListener('click',function(){
    val2 = result.innerText
    functionreset()
    console.log(calculate(val1, omar, val2))
    result.innerText = calculate(val1, omar, val2)
})







/* result.innerText.slice(0, -1);
      console.log(result.innerText.slice(0, -1))
    result.append(num)*/