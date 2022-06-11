
function userInputNumbers(userNum) {
   let numbers = []
   for (let i = 0; i <= userNum; i ++) {
     numbers.push(i)
     if (numbers[i].toString().includes(3)) {
       numbers[i] = "Won't you be my neighbor?"
     } else if (numbers[i].toString().includes(2)) {
       numbers[i] = "*boop*"
     } else if (numbers[i].toString().includes(1)) {
       numbers[i] = "*beep*"
     }
   }  
   return numbers
 }

 $(document).ready(function() {
   $("form#userNum").submit(function (event) {
      event.preventDefault(); 
     let result = userInputNumbers ($("userNum").val());
      $("#output").text(result);
      $("#output").show()
      

   });
});



