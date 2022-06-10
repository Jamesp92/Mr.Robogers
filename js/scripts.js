//business logic

function inputNumber(userInput){
   let outputArray = []
    for (let i = 0; userInput <= i; i++) {
      ;
      if (i.includes(3)) {
        outputArray.push(" Won't you be my neighbor");
      } else if (i.includes(2)) {
        outputArray.push('*Boop*');
      } else if (i.includes(1)) {
        outputArray.push(' *Beep*');
      } else {
        ouputArray.push(" ");
      }
    }
     return outputArray;
}


$(document).ready(function () {
	$('form#userInput').submit(function (event) {
		event.preventDefault();
		$('#output').text(outputArray);
	});
});