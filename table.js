
           function multiplyBy()
           {
                   var num1, num2, num3, res;
                   num1 = Number(document.formCalc.Number.value);
                   num2 = Number(document.formCalc.Start.value);
                   num3 = Number(document.formCalc.End.value);  

                   res = num1 * num2;

                  /* document.formCalc.ans.value=res;       */

          /*        document.write(formCalc.ans.value(n1 + "+" + n2 + "=" + n3));  
           form.reset();   */
           
        
            for (var i = num2; i <= num3; i=i+1) {
                 
                document.formCalc.ans.value +=  "\n" + num1 + "   *   " + i + "   =   " + num1*i   ;
                
            }

            function clear(){
                alert("clear");
                
                }

          

                  
           }