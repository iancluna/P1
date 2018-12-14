function myFunction()
{
    //Reading numbers from field.

    var num1 = parseInt(document.form.num1.value);
    var num2 = parseInt(document.form.num2.value);
    
    //Condition to check the enter numbers.
    
    if(num1<2 || num1 >100)
    {
        document.getElementById("idnum1").innerHTML = "Invalid Number";
    }
    if(num2<2 || num2>100)
    {
        document.getElementById("idnum2").innerHTML = "Invalid Number";
    }
}