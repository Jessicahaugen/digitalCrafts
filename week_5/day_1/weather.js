let userInput = document.querySelector("#wlocation");
let searchBtn = document.querySelector('#button');

const getWeather = async (userI) => {
     
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userI}&units=imperial&appid=dfb639455eb5203573cf8ec28ca7cfd1`);
  const cjson = await data.json();
  
  let name = document.querySelector(".location");
  name.innerHTML = cjson.name;
  
  let weather = document.querySelector(".weather");
  weather.innerHTML = cjson.weather[0].description;
  
  let temp = document.querySelector(".temp")
  temp.innerHTML = `${cjson.main.temp.toFixed(0)} Degrees Farenheight`;
  
      if (userInput == "undefined") {
          userI.innerHTML = "OOOPS Location not found";
  
      }

};



searchBtn.addEventListener('click', function() {
  getWeather(userInput.value);
  let label = document.querySelector("label");
  label.innerText = "";
  reset();

});