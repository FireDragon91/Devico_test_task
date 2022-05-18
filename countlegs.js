function countLegs()
{
  const legs = {chickens: 2, cows: 4, pigs: 4};
  const request = new XMLHttpRequest();
  request.onload = function() {
    const animals = JSON.parse(this.responseText);
    let result ={count_legs: 0};
    result.count_legs = animals.chickens*legs.chickens + animals.cows*legs.cows + animals.pigs*legs.pigs;
  }
  request.open("GET", "animals.json", true);
  request.send();
}