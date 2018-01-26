import axios from 'axios'
import API from '../../api'

import CurrentTemperature from './currentTemperature'
import LoadingCurrentWeather from './loadingCurrentWeather'
import ErrorComponent from './errorComponent'

class CurrentWeather extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      api: this.props.api,
      isLoading: true,
      hasError: false,
      errMsg: null,
      weatherDescription: null,
      weatherDetails: null,
      weatherExtraData: null
    }
  }

  getCurrentWeather(){
    this.setState({
      ...this.state,
      hasError: false,
      isLoading: true,
      errMsg: null
    })
    axios.get(this.state.api.currentWeather())
    .then(data => {
      if (data.status !== 200) {
        this.setState({
          ...this.state,
          hasError: true,
          errMsg: data.statusText
        })
        throw data.statusText
      }
      else {
        setTimeout(() => {
          this.setState({
            ...this.state,
            hasError: false,
            isLoading: false,
            weatherDescription: data.data.weather[0],
            weatherDetails: data.data.main,
            weatherExtraData: {
              humidity: data.data.main.humidity,
              windSpeed: data.data.wind.speed,
              clouds: data.data.clouds.all
            }
          })
        })
      }
    })
    .catch(err => {
      this.setState({
        ...this.state,
        hasError: true,
        errMsg: err
      })
      dataLayer.push({
        event: 'WeatherError',
        error: err
      })
    })
  }

  kelvinToCelsius(t){
    return Math.floor(t - 273.15)
  }

  componentWillMount(){
    this.getCurrentWeather()
  }
  render(){
    if (this.state.hasError) {
      return <ErrorComponent refresh={this.getCurrentWeather.bind(this)} lang={this.props.lang} msg={this.state.errMsg.response.data.message} />
    }
    return(
      <div className="current-weather">
        <div className="content">
          <div id="current-weather">
            {!this.state.isLoading
              ? 
                <CurrentTemperature
                  lang={this.props.lang}
                  icon={this.state.api.getIconUrl(this.state.weatherDescription.icon)}
                  desc={this.state.weatherDescription.description}
                  temp={{
                    current: this.kelvinToCelsius(this.state.weatherDetails.temp),
                    min: this.kelvinToCelsius(this.state.weatherDetails.temp_min),
                    max: this.kelvinToCelsius(this.state.weatherDetails.temp_max)
                  }}
                  extra={this.state.weatherExtraData}
                />
              : <LoadingCurrentWeather lang={this.props.lang} />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentWeather