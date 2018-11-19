// Write your code in this file!
const scuberGreetingForFeet = (ride) => {
    if (ride > 2500){
      return "No can do."
    }else if(ride <= 400){
      return "This one is on me!"
    }else if(ride > 2000){
      return "I will gladly take your thirty bucks."
    }
}


const ternaryCheckCity = (city) => {

    if (city != "NYC"){
      return "No go."
    } else if (city === "NYC"){
      return "Ok, sounds good."
  }
}

const switchOnCharmFromTip = (tip) => {
  if (tip === "generous" ){
    return "Thank you so much."
  } else if (tip === "not as generous"){
      return "Thank you."
    }else{
      return "Bye."
    }
}
