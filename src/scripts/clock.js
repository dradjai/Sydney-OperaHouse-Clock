const getCurrentTime = () => {
  // Get New Date
  const today = new Date();

  // Convert
  let day = today.getDay();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let millisecond = today.getMilliseconds();

  // Day Array
  const dayArray = [
    "Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"
  ];

  hour = checkLeadingZero(hour);
  minute = checkLeadingZero(minute);
  second = checkLeadingZero(second);
 
 

  // Assemble
  let currentTime = `${dayArray[day]} ${hour} : ${minute} : ${second} : ${millisecond}`;

  
 
  // Render 
  document.querySelector(".clock").innerHTML = currentTime;

  setTimeout(getCurrentTime, 0);

}

const checkLeadingZero = paramTime => {
  paramTime < 10 ? `0${paramTime}` : null;

  return paramTime;

}



