/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
            function myFun(isStudent, age){

                if(isStudent)
                    result = "50% discount";
                else if(age < 10)
                    result = "Free For Kids";
                else if(age >=60)
                    result = "15% discount";
                else 
                    result = "Regular Price: 800tk"
            
                //output result
                console.log(result);
            }

            myFun(false,10);