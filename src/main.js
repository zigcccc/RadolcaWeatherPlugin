import API from '../api'
import CurrentWeatherContainer from './Components/currentWeatherContainer'
import WeatherForecast from './Components/weatherForecast'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      api: new API(46.4845, 13.7857)
    }
  }
  render(){
    return(
      <div className="container">
        <h1 className="title">Vreme v Kranjski gori</h1>
        <CurrentWeatherContainer api={this.state.api} data={{lon: 46.4845, lat: 13.7857}} />
        <hr/>
        <br/>
        <h2 className="subtitle">Vremenska napoved:</h2>
        <WeatherForecast api={this.state.api} />
        <hr/>
      </div>
    )
  }
}

export default Main