const txtOp1 = document.getElementById("op1");
const txtOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const btnReset = document.getElementById("reset");
const pResultado = document.getElementById("resultado");

txtOp2.addEventListener('keyup',(event)=>{
    if(event.key === "Enter"){
       calcular()
    }
  })

function calcular () {
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

   if((operacion == "+" || operacion == "-" || operacion == "*" ||operacion == "/") && !isNaN(op1) && !isNaN(op2)) {
    let resultado;

    switch (operacion) {
        case "+": 
        resultado = op1 + op2;
        break;

        case "-":
        resultado = op1 - op2;
        break;

        case "*": 
        resultado = op1 * op2;
        break;

        case "/": 
        resultado = op1 / op2;
        break;
    }
    pResultado.style = "color:black";
    pResultado.innerText = "The result is: " + resultado;
   } else {
    pResultado.style = "color:red";
    pResultado.innerText =  "Couldn't calculate that 😔​";
   }

}