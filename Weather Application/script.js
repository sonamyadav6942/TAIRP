APIKEY = "146f96bcd6e54078b97102317242504";

// http://api.weatherapi.com/v1/current.json?key=146f96bcd6e54078b97102317242504&q=London&aqi=yes


const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');


const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName')
const localTime= document.getElementById('loc-time');
const temp = document.getElementById('temp')
const sup = document.getElementById('sup')


async function getData(APIKEY, cityInput) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${cityInput}&aqi=yes`);
     return await promise.json();
}


searchBtn.addEventListener('click', async ()=>{
    const input = cityInput.value;
    document.getElementById('outputCard').style.visibility ='visible';
    const result = await getData(APIKEY, input);
    cityName.innerText = ` ${result.location.name}, ${result.location.region}`
    countryName.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    sup.innerText = '°C'
    localTime.innerText = `${result.location.localtime}`;  

})