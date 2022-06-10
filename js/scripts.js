//business logic

function result(userInput){
let array = []
 for (let index = 0; index <= userInput;);{
  array.push(index)
  if (index.toString().includes(3)) {
      array.push("wont you be my neighbor")
  }else if (index.toString().includes(2)){
    array.push("*boop*")
  }else if (index.toString().includes(1)){
    array.push("*beep*")
  }

}
  return array;
}

    