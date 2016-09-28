(function() {
  //initialize variables
  var startbutton= $("#start");

  //main functionality
  startbutton.on("click", countdown);

  //function definition
  function countdown(){
    alert("It's the final countdown!!!");

  }
}());
