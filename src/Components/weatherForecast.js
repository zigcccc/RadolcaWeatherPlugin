import axios from 'axios'
import API from '../../api'

import WeatherForecastCard from './weatherForecastCard'

class WeatherForecast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      api: this.props.api,
      isLoading: true,
      hasErrors: false,
      errMsg: null,
      forecastData: null,
      days: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota'],
      today: new Date().getDay(),
      forecast: {}
    }
  }
  getWeatherForecast(){
    axios.get(this.state.api.forecast())
      .then(data => {
        if (data.status !== 200) {
          this.setState({
            ...this.state,
            hasErrors: true
          })
        }
        else {
          this.setState({
            ...this.state,
            isLoading: false,
            hasErrors: false,
            forecastData: data.data
          }, () => console.log(this.state))
        }
      })
  }
  getDayAndHour(dateStr){
    let date = new Date(dateStr)
    let day = this.state.days[date.getDay()]
    let hours = date.getHours()
    return {
      day: day,
      hour: hours
    }
  }
  kelvinToCelsius(t){
    return Math.floor(t - 273.15)
  }
  componentWillMount(){
    this.getWeatherForecast()
  }
  render(){
    if (this.state.forecastData) {
      return(
        <div className="weather-forecast">
          {this.state.forecastData.list.map((forecast, i) => {
            if (i > 0 && this.getDayAndHour(forecast.dt_txt).day !== this.getDayAndHour(this.state.forecastData.list[i - 1].dt_txt).day) {
              return (
                <WeatherForecastCard 
                  key={i}
                  temp={this.kelvinToCelsius(this.state.forecastData.list[i + 4].main.temp)}
                  day={this.getDayAndHour(this.state.forecastData.list[i + 4].dt_txt).day}
                />
              )
            }
            else {
              return false
            }
          })}
        </div>
      )
    }
    else {
      return null
    }
  }
}

export default WeatherForecast