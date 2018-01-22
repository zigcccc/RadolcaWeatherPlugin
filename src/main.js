import CurrentWeather from './Components/currentWeather'

class Main extends React.Component {
  render(){
    return(
      <div className="container">
        <CurrentWeather data={{lon: 46.4845, lat: 13.7857}} />
        <hr/>
        <br/>
        <h2 className="subtitle">Vremenska napoved:</h2>
        <div id="forecast"></div>
        <hr/>
      </div>
    )
  }
}

export default Main