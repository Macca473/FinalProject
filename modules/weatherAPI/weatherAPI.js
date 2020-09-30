const fetch = require("node-fetch");

console.log("hello");

module.exports = async function WeatherData() {
    let weatherinfo = {}

    await fetch("http://api.openweathermap.org/data/2.5/weather?q=adelaide&appid=1566020c66651f6712fd865503112dec", {
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(await function WeatherMod(response) {
            weatherinfo = {
                hour: parseInt(Date().substr(16, 2)),
                weather: WeatherTypes(response.weather[0].id),
                temp: Math.round(response.main.temp - 273.15)
            }
            // console.log("weather Data: " + JSON.stringify(weatherinfo))
    })
    // console.log("weather Data: " + JSON.stringify(weatherinfo))
    return weatherinfo
}

function WeatherTypes(ID) {
  return (ID >= 800 && ID <= 802) ? 0 
        : (ID >= 803 && ID <= 804 || ID >= 701 && ID <= 762) ? 1
        : (ID >= 300 && ID <= 311 || ID >= 500 && ID <= 501 || ID == 600 || ID == 615) ? 2
        : (ID >= 600 && ID <= 613 || ID >= 616 && ID <= 621 || ID == 501 || ID >= 511 && ID <= 521 || ID == 531 || ID >= 312 && ID <= 321 || ID == 200 || ID == 201 || ID == 210 || ID == 211|| ID == 230 || ID == 231) ? 3
        : 4
}

//[Clear, Overcast, Light, Mid, Heavy]