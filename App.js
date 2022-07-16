
const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');


const API_Key = "d790c8ce392175c4dcd464b32bd2ef62";

button.addEventListener('click',() => {

    const cityInput = inputTxt.value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units-metric&APPID=${API_Key}`)
    .then(res => res.json())
    .then(data => {
        
        inputTxt.value = "";

        showData.innerHTML = `
                                <ul>
                                  <li class="desc"> Description: ${data.weather[0].description}
                                  <li class="city">City: ${data.name}</li>
                                  <li class="temp">Temperature: ${data.main.temp}°c</li>
                                  <li class="timezone">Timezone: ${data.timezone}</li>l
                                  </ul>
                             `;   


    });
});


// const changeBg = ()=>{
   
//     const images =[
//         'url(thunder2.jpeg)',
//         'url(city.jpeg)',
//     ]
//     const body = document.querySelector('body')
//     const bg = images[Math.floor(Math.random() * images.length)];
//     body.style.background = 'linearGradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))',bg;
// }

// setInterval(changeBg, 1000)


