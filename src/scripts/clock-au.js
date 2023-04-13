const getCurrentTime = () => {
  const options = {
    timeZone: 'Australia/Sydney',
    hour12: true,
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  // Get current time
  const currentTime = new Date().toLocaleString("en-AU", options);
 
  // Render 
  //document.querySelector("h1").innerHTML = "서울";
  document.querySelector(".clock").innerHTML = currentTime;

  setTimeout(getCurrentTime, 0);

}

const checkLeadingZero = paramTime => {
  paramTime < 10 ? `0${paramTime}` : null;

  return paramTime;
}



