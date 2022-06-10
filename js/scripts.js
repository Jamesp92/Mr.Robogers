//business logic

function inputNumber(userInput){
   let outputArray = []
    for (let index = 0; index <= userInput; index++) {
       outputArray.push(index .toString().split(","));
    }
       
        return outputArray;
  }
  function phraseNumbers (userInput){
   let respondingArray = [];
   const outputArray = inputNumber(userInput);
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

$(document).ready(function () {
  $("form#userInput").submit(function (event) {
    event.preventDefault();
    const results = result (userInput);
    $("#output").text(results);
  });
});
