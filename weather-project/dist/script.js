let weather={
    "apiKey":"57fca58807a7ee920d1791fe1d5cba9e",
    fetchWeather:function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' 
        + city 
        + '&units=metrics&appid='
        + this.apiKey
        ).then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather:function(data){
        const {name}=data
        const{icon,description}=data.weather[0]
        const{temp,humidity}=data.main;
        const{speed}=data.wind
    console.log(name,icon,description,temp,humidity,speed)  
    document.querySelector('.city').innerText='Weather in '+name;
    document.querySelector('.icon').src='https://openweathermap.org/img/wn/' + icon +'.png'
    document.querySelector('.description').innerText=description;
    document.querySelector('.temp').innerText=(temp/10).toFixed(3) + '°C'
    document.querySelector('.humidity').innerText='Humidity: '+ humidity + '%';
    document.querySelector('.wind').innerText='Wind speed: ' + speed + ' km/h';
    document.querySelector('.weather').classList.remove('loading')
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name +"')"
  },
  search:function(){
    this.fetchWeather(document.querySelector('.search-bar').value)
  }
};
document.querySelector('.search button').addEventListener('click',function(){
  weather.search();
})
document.querySelector('.search-bar').addEventListener('keyup',function(event){
   if(event.key=='Enter'){
    weather.search()
   }
})
weather.fetchWeather('Hyderabad');