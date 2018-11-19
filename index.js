function scuberGreetingForFeet(number) {
let result
if (number<=400){
  result = "This one is on me!"
}
if (number>=2000){
  result = 'I will gladly take your thirty bucks.'
}
if (number>=2500){
  result = "No can do."
}
return result
}

function ternaryCheckCity(city) {
  return city==="NYC" ? "Ok, sounds good." : "No go.";

  }

function switchOnCharmFromTip(tip){
  let answer
  switch(tip) {
    case 'generous':
    answer= "Thank you so much.";
    break;
    case 'not as generous':
    answer= "Thank you.";
    break;
    default:
    answer= 'Bye.';

  }
  return answer
}
