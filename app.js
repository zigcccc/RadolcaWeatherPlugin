import axios from 'axios'
import Main from './src/main'
import API from './api'

const weather_plugin = document.getElementById('root');

// const currentWeatherContainer = document.getElementById('current-weather')
// const forecastContainer = document.getElementById('forecast')

// const weather_api = new API(46.4845, 13.7857)

// window.renderCurrentWeather = () => {
//   axios.get(weather_api.currentWeather())
//   .then(data => {
//     if (data.status === 200) {
//       console.log(data.data.weather)
//       let iconID = data.data.weather[0].icon
//       let iconSRC = weather_api.getIconUrl(iconID);
//       let image = app.createImageElement(iconSRC)
//       currentWeatherContainer.appendChild(image)
//     }
//   })
//   .catch(err => console.error(err))
// }

// window.renderForecast = () => {
//   axios.get(weather_api.forecast())
//     .then(data => {
//       if (data.status === 200) {
//         let forecast = data.data.list
//         for (let day of forecast) {
//           let iconID = day.weather[0].icon
//           let iconSRC = weather_api.getIconUrl(iconID)
//           let image = app.createImageElement(iconSRC)
//           forecastContainer.appendChild(image)
//         }
//       }
//     })
// }



// snow.parseResort('Kranjska-Gora', 'mid', (json) => {
//   console.log(json)
// })

// document.addEventListener('DOMContentLoaded', () => {
//   renderCurrentWeather()
//   renderForecast()
// })

ReactDOM.render(
  <Main/>,
  weather_plugin
)