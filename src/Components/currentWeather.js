import axios from 'axios'
import API from '../../api'

class CurrentWeather extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      api: new API(this.props.data.lon, this.props.data.lat),
      isLoading: true,
      hasError: false,
      weatherData: null
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
            weatherData: data.data.weather[0]
          }, () => console.log(this.state))
        }
      })
  }

  componentWillMount(){
    this.getCurrentWeather()
  }
  render(){
    return(
      <div className="current-weather">
        <h1 className="title">Vreme v Kranjski gori</h1>
        <hr/>
        <h2 className="subtitle">Trenutno stanje vremena:</h2>
        <div className="content">
          <div id="current-weather">
            {this.state.weatherData && this.state.hasError === false
              ? <img src={this.state.api.getIconUrl(this.state.weatherData.icon)} alt={this.state.weatherData.main} />
              : null
            }
          </div>
        </div>
        <button className="btn is-primary" onClick={this.getCurrentWeather.bind(this)}>Get data</button>
      </div>
    )
  }
}

export default CurrentWeather