function dwarfRollCall(dwarves) {
<<<<<<< HEAD
  var newArr = [];
  
  for(var i = 1 ; i <= dwarves.length ; i ++ ){
    //Backticks used - more than 2 values
    //Format e.g - 1. Smurf 2. Smurfet
    newArr.push(`${i}. ${dwarves[i-1]} `);
  }
  
  //Convert array to string- no space
  return newArr.join("");

=======
   var newArr = [];

  for(var i = 1 ; i <= dwarves.length ; i ++ ){
    newArr.push(`${i}. ${dwarves[i-1]}`);
  }
  
  return newArr.join(" ");
>>>>>>> e16cc56cada6a5a854ca309f0847cd0fdefd93e2


}

function summonCaptainPlanet(planeteerCalls){
   var newArr = [];
  //Loop arr - fixed #
  for(var i = 0 ; i < planeteerCalls.length  ; i++){
    var call = planeteerCalls[i].toUpperCase()+"!";
    newArr.push(call);
  }
  return newArr;
}

function longPlaneteerCalls(words) {
  for(var i = 0 ; i < words.length ; i++){
    if(words[i].length > 4){
      return true;
    }
  }
  return false;

}

function findTheCheese (foods) {
    var cheese = ["cheddar", "gouda", "camembert"];

  for(var i = 0 ; i < cheese.length ; i++ ){

    for(var k = 0; k < foods.length ; k++){
      if(foods[k] == cheese[i]){
        return foods[k];
      }
    }

  }
  return "no cheese!";

}
