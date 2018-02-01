import axios from 'axios'
import API from '../../api'

import WeatherForecastCard from './weatherForecastCard'
import LoadingWheaterForecast from './loadingWheaterForecast'
import ErrorComponent from './errorComponent'

class WeatherForecast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      api: this.props.api,
      isLoading: true,
      hasErrors: false,
      errMsg: null,
      days: this.props.lang === 'sl' ? ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota'] : ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      forecast: null
    }
  }
  getWeatherForecast(){
    this.setState({
      ...this.state,
      hasErrors: false,
      isLoading: true,
      errMsg: null
    })
    axios.get(this.state.api.forecast())
      .then(data => {
        if (data.status !== 200) {
          this.setState({
            ...this.state,
            isLoading: true,
            hasErrors: true,
            errMsg: data.statusText
          })
          throw data.statusText
        }
        return data.data.list
      })
      .then(forecast => {
        this.generateForecastArray(forecast)
      })
      .catch(err => {
        this.setState({
          ...this.state,
          hasErrors: true,
          errMsg: err
        })
        dataLayer.push({
          event: 'WeatherError',
          error: err
        })
      })
  }
  getDayAndHour(dateStr){
    dateStr = dateStr.replace(/-/g, '/')
    let date = new Date(dateStr)
    let day = this.state.days[date.getDay()]
    let hours = date.getHours()
    return {
      day: day,
      hour: hours
    }
  }
  generateForecastArray(forecasts){
    let forecastObj = {}
    for (let forecast of forecasts) {
      let day = this.getDayAndHour(forecast.dt_txt).day
      let hour = this.getDayAndHour(forecast.dt_txt).hour
      let temp = this.kelvinToCelsius(forecast.main.temp)
      let icon = forecast.weather[0].icon
      let weatherDesc = forecast.weather[0].description
      let wind = forecast.wind.speed
      let clouds = forecast.clouds.all
      if(hour === 12){
        forecastObj[day] = {
          hour,
          temp,
          icon,
          desc: weatherDesc,
          wind,
          clouds
        }
      }
    }
    this.setState({
      ...this.state,
      isLoading: false,
      hasErrors: false,
      forecast: forecastObj
    })
  }
  kelvinToCelsius(t){
    return Math.floor(t - 273.15)
  }
  componentWillMount(){
    this.getWeatherForecast()
  }
  render(){
    if (this.state.hasErrors){
      return <ErrorComponent lang={this.props.lang} refresh={this.getWeatherForecast.bind(this)} msg={this.state.errMsg.response.data.message} />
    }
    if (this.state.isLoading) {
      return <LoadingWheaterForecast lang={this.props.lang} />
    }
    let keys = Object.keys(this.state.forecast)
    let values = Object.values(this.state.forecast)
    return (
      <div className="weather-forecast">
        {values.map((forecast, i) => {
          return (
            <WeatherForecastCard 
              key={i}
              temp={forecast.temp}
              day={keys[i]}
              icon={this.state.api.getIconUrl(forecast.icon)}
              description={forecast.desc}
              extra={{wind: forecast.wind, clouds: forecast.clouds}}
            />
          )
        })}
      </div>
    )
  }
}

export default WeatherForecast