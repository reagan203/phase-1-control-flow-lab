function scuberGreetingForFeet(){
  // Write your code here!
  if (distance <= 400)
    return 'This one is on me!';
  
  
  else if (distance > 2000 && distance < 2500) 
    return 'I will gladly take your thirty bucks.';
  
  else if (distance > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(){
  // Write your code here!
  let message ="";
  city === "NYC" ? message ="ok, sounds good." : message ="No go";

  return message;
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch (tip) { case "generous" :return "thank you so much." ; break;

  case "not as generous": return "Thank you." ;break ; default: return "Bye.";br
}
}