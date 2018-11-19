// Write your code in this file!
function scuberGreetingForFeet(journey) {
  if (journey <= 400) {
    return 'This one is on me!';
  }
  else if (journey > 2000 && journey < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (journey > 2500) {
    return 'No can do.';
  }
};

function ternaryCheckCity(city) {
  let response;
  city === "NYC" ? response = 'Ok, sounds good.' : response = 'No go.';
  return response;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
} 