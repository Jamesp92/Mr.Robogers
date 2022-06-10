//business logic

function inputNumber(userInput){
   let inputArray = []
   for (let i = 0; i <= userInput; i++) {
      inputArray.push( i.toString().split(","));
   }
   return inputArray;
}
      let respondingArray = [];
      respondingArray.forEach(function (phrase) {
   if (phrase.includes(3)) {
        phrase = "Won't you be my neighbor?";
        respondingArray.push(phrase);
    } else if (phrase.includes(2)) {
        phrase = "*Boop*";
        respondingArray.push(phrase);
     } else if (phrase.includes(1)) {
        phrase = "*Beep*";
        respondingArray.push(phrase);
    } else {
        respondingArray.push(phrase);
     }
});
return respondingArray;
}
//   function phraseNumbers (userInput){
   // const inputArray = inputNumber(userInput);

$(document).ready(function () {
  $("form#userInput").submit(function (event) {
    event.preventDefault();
    let response = inputNumber(userInput);
    $("#output").text(inputArray)
  

  });
});
