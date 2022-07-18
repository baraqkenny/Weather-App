
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');


const API_Key = "d790c8ce392175c4dcd464b32bd2ef62";

button.addEventListener('click',() => {

    const cityInput = inputTxt.value;
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units-metric&APPID=${API_Key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        inputTxt.value = "";

        showData.innerHTML = `
                                <ul>
                                  <li class="desc"> Description: ${data.weather[0].description}</li>
                                  <li class="city">City: ${data.name}</li>
                                  <li class="temp">Temperature: ${data.main.temp}°c</li>
                                  <li class="timezone">Timezone: ${data.timezone}</li>l
                                  </ul>
                             `;   


    });
});

