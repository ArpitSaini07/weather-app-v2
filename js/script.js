const button = document.querySelector('button');

const city = document.getElementById('enterCity');
const country = document.getElementById('enterCountry');

const home = document.querySelector('#home');
const weather = document.querySelector('#weather');
const API_KEY = "182031786caf836401a78e4806073724";

const display = (Temp, City, Country, Weather) =>{
    //TEMPERATURE
    const temp_cont = document.querySelector('#item-2');
    const addtemp = document.createElement('p');
    addtemp.innerHTML = `<strong>Temperature: </strong>${(Temp.temp - 273.15).toFixed(2)} °C<br>
                         <strong>Feels Like: </strong>${(Temp.feels_like - 273.15).toFixed(2)} °C<br>
                         <strong>Humidity: </strong>${Temp.humidity}`;
    temp_cont.append(addtemp);

    //DESCRIPTION
    const des_cont = document.querySelector('#item-4');
    const adddesp = document.createElement('p');
    adddesp.innerHTML = `<strong>Forecast</strong><br>${Weather.description}`;
    des_cont.append(adddesp);

    //CITY AND COUNTRY
    const info = document.querySelector('#item-1');
    const addinfo = document.createElement('p');
    addinfo.innerHTML = `<strong>${City}, ${Country}</strong>`;
    info.append(addinfo);

}

getWeather = async (event) => {
    // city.value && country.value
    if(city.value && country.value){
        event.preventDefault();
        home.classList.add('inactive');
        weather.classList.remove('inactive');
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${API_KEY}`);
        const data = await api_call.json();
        const Temp = data.main;
        const City = data.name;
        const Country = data.sys.country;
        const Weather = data.weather[0];
        console.log(data);
        display(Temp, City, Country, Weather);
    }
}
button.addEventListener('click', getWeather);



// http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=182031786caf836401a78e4806073724




