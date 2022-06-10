//business logic

function inputNumber(userInput){
   let outputArray = []
    for (let index = 0; index <= userInput; index++) {
       outputArray.push(index);
    }
       return outputArray;
  }
  function phraseNumbers (responseArray){
   let respondingArray = [];
   responseArray.forEach(function (element) {
        if (element.toString().includes(3)) {
          element = "Won't you be my neighbor?";
          respondingArray.push(element);
      } else if (element.toString().includes(2)) {
          element = "*Boop*";
          respondingArray.push(element);
       } else if (element.toString().includes(1)) {
          element = "*Beep*";
          respondingArray.push(element);
      } else {
          respondingArray.push(element);
       }
  });
return respondingArray;
}


