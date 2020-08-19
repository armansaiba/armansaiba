window.addEventListener('load',()=>{
  let long;
  let lat;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
       var y = position.coords.latitude;
       var x = position.coords.longitude;
   
      console.log(position);
        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${y}&lon=${x}&units=metric&appid=090fbd42204506c82e82606827e926c5`;
     fetch(api)
      .then(weather => {
         return weather.json();
    }).then(displayResults);
  });

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].description;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;




  let feel = document.querySelector('.f');
  feel.innerText = `${Math.round(weather.main.feels_like)}°c`;

  let hum = document.querySelector('.h');
  hum.innerText =`${Math.round(weather.main.humidity)}%`;

  let ap = document.querySelector('.a');
  ap.innerText = `${Math.round(weather.main.pressure)}hPa`;

  let wspeed = document.querySelector('.w');
  wspeed.innerText =`${Math.round(weather.wind.speed)}km/h`;





}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date}, ${month} ${year}`;
}
}
});