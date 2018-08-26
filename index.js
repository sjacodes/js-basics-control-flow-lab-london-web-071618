
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!'
  }
  else if (someValue > 2000 && someValue < 2500) {
    return'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  city == "NYC" ? message = "Ok, sounds good." : message =  "No go."
  return message
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      output = "Thank you so much.";
      break;
    case 'not as generous':
      output = "Thank you."
      break;
    default:
      output = 'Bye.'
      break;
    }
    return output
  }
