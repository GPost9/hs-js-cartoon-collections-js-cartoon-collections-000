function dwarfRollCall(dwarves) {
  var hiHo = [];
  for ( var i = 0; i < dwarves.length; i++)
  {
   hiHo.push(`${i+1}. ${dwarves[i]} `);

  } 
return hiHo.join('');

}



function summonCaptainPlanet(planeteerCalls){
for (var i = 0; i < planeteerCalls.length; i++) 
 {
  planeteerCalls[i] = planeteerCalls[i].toUpperCase() + '!';
 }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++);{
    if (words.length > 4)
    return true;
  }
  return false;
  
}

function findTheCheese (foods) {
  var lunch = ['cheddar', 'gouda', 'camembert'];
  for (var i = 0; i < foods.length; i++) { 
    for (var j = 0; j < lunch.length; j++){
    
    if (lunch[j] === foods[i]){
      return foods[i];
    }
    
    
}
}
return 'no cheese!';
}

function wordsWithB (words) {
  var array = []
  for (var i = 0; i < words.length; i++) {
    if (words[i][0] === 'b')
    array.push(words[i])
    
     console.log(words);
  }
  return array
}