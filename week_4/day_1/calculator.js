function welcomeCalc(){
    console.log("welcome to the calculator");
}

function calculate(paramater,num1,num2) {
    
    if (paramater == "multiply") {
        console.log(num1*num2);
    } else if( paramater == "divide") {
        console.log(num1/num2);
    } else if(paramater == "addition") {
        console.log(num1+num2);
    } else if (paramater == "subtraction") {
        console.log(num1-num2);
    } else { 
        console.log("please provide valid paramaters");
    }

}

welcomeCalc()
calculate("addition",25,89)
calculate("subtraction",35,21)
calculate("multiply",12,54)
calculate("divide",50,5)
calculate("yo", 12,23)



