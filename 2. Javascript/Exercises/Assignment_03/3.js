
function facttable()
{
    {

        var fact=1;
        
        var num = 1;
        
        var i;
        
        var str= "<table style='background-color:orange' border='1'><tr><th>Number</th><th>Factorial</th></tr>";
        
        
        
        while(num<=4){
        
        for(i=1;i<=num;i++){
        
        fact = fact*i;
        
        }
        
        str+= "<tr><td>"+num+"</td><td>"+fact+"</td><tr>";
        
        num++;
        
        fact=1;
        
        }
        str+= "</table>";       
        document.getElementById("result").innerHTML = str;
        
        }
}