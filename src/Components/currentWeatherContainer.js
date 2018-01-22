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
      weatherDetails: null
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
            weatherDetails: data.data.main
          }, () => console.log(this.state))
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
                  icon={this.state.api.getIconUrl(this.state.weatherDescription.icon)}
                  temp={{
                    current: this.kelvinToCelsius(this.state.weatherDetails.temp),
                    min: this.kelvinToCelsius(this.state.weatherDetails.temp_min),
                    max: this.kelvinToCelsius(this.state.weatherDetails.temp_max)
                  }}
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