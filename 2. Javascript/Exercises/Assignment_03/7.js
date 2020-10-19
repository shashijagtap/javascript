function disptable(n)
         {
             var str="<table style='background-color:orange' border='1'>";
                for(var i=1;i<=10;i++)
                {
                    str += "<tr>";
                    str += "<td>";
                    str += n + " * " + i + " = " + (n*i);
                    str += "</td>";
                    str += "</tr>";
                }
                str += "</table>";
                document.getElementById("table").innerHTML=str;
         }
