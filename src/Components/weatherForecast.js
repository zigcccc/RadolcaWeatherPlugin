import axios from 'axios'
import API from '../../api'

class WeatherForecast extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      api: this.props.api,
      isLoading: true,
      hasErrors: false,
      errMsg: null,
      forecastData: null
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
            return <p key={i}>{this.kelvinToCelsius(forecast.main.temp)}°C</p>
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