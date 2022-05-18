function countLegs()
{
  const legs = {chickens: 2, cows: 4, pigs: 4};
//  const request = new XMLHttpRequest();
//  request.onload = function() {
    const animals = JSON.parse({
  "pigs":6,
  "chickens":12,
  "cows":21
});
    let result ={count_legs: 0};
    result.count_legs = animals.chickens*legs.chickens + animals.cows*legs.cows + animals.pigs*legs.pigs;
    return JSON.stringify(result);
//  }
//  request.open("GET", "animals.json", true);
//  request.send();
}
