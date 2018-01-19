import axios from 'axios'
import * as snow from 'snow-forecast-sfr'
import API from './api'
import DOM from './dom_manipulation'

const currentWeatherContainer = document.getElementById('current-weather')
const forecastContainer = document.getElementById('forecast')

const weather_api = new API(46.4845, 13.7857)
const app = new DOM()

window.renderCurrentWeather = () => {
  axios.get(weather_api.currentWeather())
  .then(data => {
    if (data.status === 200) {
      console.log(data.data.weather)
      let iconID = data.data.weather[0].icon
      let iconSRC = weather_api.getIconUrl(iconID);
      let image = app.createImageElement(iconSRC)
      currentWeatherContainer.appendChild(image)
    }
  })
  .catch(err => console.error(err))
}

window.renderForecast = () => {
  axios.get(weather_api.forecast())
    .then(data => {
      if (data.status === 200) {
        let forecast = data.data.list
        for (let day of forecast) {
          let iconID = day.weather[0].icon
          let iconSRC = weather_api.getIconUrl(iconID)
          let image = app.createImageElement(iconSRC)
          forecastContainer.appendChild(image)
        }
      }
    })
}



snow.parseResort('Kranjska-Gora', 'mid', (json) => {
  console.log(json)
})

document.addEventListener('DOMContentLoaded', () => {
  renderCurrentWeather()
  renderForecast()
})