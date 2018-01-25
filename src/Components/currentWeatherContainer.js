import axios from 'axios'
import API from '../../api'

import CurrentTemperature from './currentTemperature'

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
    axios.get(this.state.api.currentWeather())
      .then(data => {
        if (data.status !== 200) {
          this.setState({
            ...this.state,
            hasError: true
          })
        }
        else {
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
        }
      })
      .catch(err => {
        this.setState({
          ...this.state,
          hasError: true,
          errMsg: err
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
    return(
      <div className="current-weather">
        <div className="content">
          <div id="current-weather">
            {this.state.weatherDescription && this.state.weatherDetails && this.state.hasError === false
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
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentWeather