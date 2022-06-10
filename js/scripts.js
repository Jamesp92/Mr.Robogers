function result (number){
 let stringArray=["#number"];
  // for (let index = 0; index <= number;);{
   stringArray.push(number)
   return stringArray;
   
  }


$(document).ready(function(){
  $("number").submit(function(event) {
    event.preventDefault();
    const number = ($("#number").val());
    const results = result( stringArray);
    $("#output").text(results);
    
  });
});







