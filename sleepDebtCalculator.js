const getSleepHours = day => {
    /* if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednessday') {
      return 6;
    } else if (day === 'thursday') {
      return 7;
    }
    .....
    else {
  
    } */
  
    switch (day) {
    case 'monday':
      return 4;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednessday':
      return 6;
      break;
    case 'thursday':
      return 2;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 6;
      break;
    case 'sunday':
      return 3;
      break;
    default:
      return 'Error!'
    break;
   }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') +
    getSleepHours('wednessday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
  //console.log(getSleepHours('monday'));
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const IdealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === IdealSleepHours){
      console.log("You've got the perfect amount of sleep.")
    }
    else if (actualSleepHours > IdealSleepHours){
      console.log("You've got " + (actualSleepHours - IdealSleepHours) + " more hours of sleep this week.");
    }
    else if (actualSleepHours < IdealSleepHours){
      console.log("You should get some rest because you slept " + (IdealSleepHours - actualSleepHours) + " hours less than you should have this week.");
    }
    else {
      console.log("Error! Something went wrong, check your code.");
    }
  };
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  