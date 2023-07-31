let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = true;
let runnersAge = 21;

if (isRegisteredEarly && runnersAge > 18){
  raceNumber += 1000;
}
if (isRegisteredEarly && runnersAge > 18){console.log(`Race begins at 9:30, your race number is: ${raceNumber}.`);
} 
else if (!isRegisteredEarly && runnersAge > 18){console.log(`Race begins at 11:00, your race number is: ${raceNumber}.`);
}
else if (runnersAge < 18){console.log(`Race begins at 12:30, your race number is: ${raceNumber}.`);
}
else{
  console.log('Please approach the registration desk, thanks!');
}
  
