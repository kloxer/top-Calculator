const button = document.querySelectorAll("button")

const display = document.querySelector(".displayText")

num1= 0
num2= 0
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
        if (e.id == "AC")
        {
            display.textContent = "";
            num1= 0
            num2 = 0
        }

        if (e.id == "minus"){
            operator="minus"

            showResult(e.id)

        }
        
        if (e.id == "mult"){
            operator="mult"

            showResult(e.id)

        }
        if (e.id == "div"){
            operator="div"

            showResult(e.id)

        }

        if (e.id == "mod"){
            operator="mod"

            showResult(e.id)

        }
        if (e.id == "addDecimal")
        {
            showResult(e.id)
        }

        if(e.id == "equal")
        {
            showResult(e.id)
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
isDecimal = false;
function showResult(operator){
    if (operator == "addDecimal")
    {
        display.textContent += "."
        isDecimal = true;
        return
    }
    if (operator == ""){
        return
    }
    if (num1 == 0)
        {
            if(isDecimal){
                num1 = parseFloat(display.textContent)
                isDecimal= false;
            }
            else{
                num1 = parseInt(display.textContent);   
            }
            display.textContent = "";
        }
        else{
            if (!(operator == "equal") || num2 == 0){
                
                if(isDecimal){
                    num2 = parseFloat(display.textContent)
                    isDecimal= false;
                }
                else{
                    num2 = parseInt(display.textContent);   
                }
            
            }
            if (this.operator == "plus"){
                num1 = num1 + num2

            }
            if (this.operator =="minus"){
                num1 = num1 - num2
            }
            if (this.operator == "mult"){
                num1 = num1 * num2
            }
            if (this.operator == "div"){
                num1 = num1 / num2
            }
            if (this.operator == "mod"){
                num1 = num1 % num2
            }

            display.textContent = num1
            console.log(num1)
            console.log(num2);
            hasResult= true;
    }
}