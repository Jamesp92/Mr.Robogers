//business logic

function inputNumber(element){
   let outputArray = []
    for (let i = 0; number <= i; i++) {
      const element = i.toString();
      if (element.includes('3')) {
        numberArray.push(" Won't you be my neighbor?");
      } else if (element.includes('2')) {
        numberArray.push(' Boop!');
      } else if (element.includes('1')) {
        numberArray.push(' Beep!');
      } else {
        numberArray.push(" " + element);
      }
    }
     return outputArray;
}


$(document).ready(function () {
	$('#userInput').submit(function (event) {
		event.preventDefault();
		let roboNums = parseInt ('#userInput').val();
		let answer = inputNumber(output);
		$('#output').text(outputArray);
	});
});