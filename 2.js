// JavaScript source code

function power(n1,n2)
{
    a = n1;
    b = n2;

    while(n2!=0)
    {
        p = n1 * p;
        n2--;
    }
    document.getElementById("pow").innerHTML = n1 + " to the power " + n2 + " is" + p;
}
