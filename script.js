const button = document.querySelectorAll("button")

const display = document.querySelector(".displayText")

numbers = []
operator = "";
hasResult = false;
button.forEach((e)=>
{

    //each button adds an event listener
    e.addEventListener("click", () => {
        if (hasResult){
            display.textContent = "";
            hasResult = false;
        }
        if (operator == "done"){
            operator = "";
            display.textContent = "0";

        }
        if (e.id == "AC")
        {
            display.textContent = "";
            numbers = []
            console.log(numbers)
        }
        if (e.id == "plus")
        {
            operator="plus"
            // if (numbers.length == 0)
            // {
            //     numbers.push(parseInt(display.textContent))
            //     display.textContent = "";
            // }
            // else if (numbers.length == 1)
            // {
            //     numbers.push(parseInt(display.textContent))
                showResult(e.id)
            // }
     
        }
        if (e.id == "minus"){
            operator="minus"

            showResult(e.id)

        }
        if(e.id == "equal")
        {
            showResult(operator)

            // secondNumber = display.textContent;
            // ret = doOperation(firstNumber,secondNumber,operator);
            // display.textContent = ret;
            // operator = "done";
            // firstNumber = ret;
        }
        display.textContent += e.value;

    })
})
function doOperation(num1,num2,operator){
    if (operator == "plus")
    {
        return parseInt(num1)+parseInt(num2);
    }

}
function showResult(operator){
    if (numbers.length == 0)
        {
            numbers.push(parseInt(display.textContent))
            display.textContent = "";
        }
        else{
            numbers.push(parseInt(display.textContent))
            tot = 0
            if (operator == "plus"){
                console.log(numbers)
                tot = numbers[0] + numbers[1]

            }
            if (operator =="minus"){
                tot = numbers[0] - numbers[1]

            }
            numbers.pop()
            numbers[0] = tot
            display.textContent = numbers[0]
            console.log(numbers)
            hasResult= true;
    }
}