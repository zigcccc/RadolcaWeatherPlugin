class WeatherForecastCard extends React.Component {
  render(){
    return(
      <div className="forecast-card">
        <h2 className="subtitle">{this.props.day}</h2>
        <img src={this.props.icon} alt={this.props.description}/>
        <h4 className="temp">{this.props.temp}<small>°C</small></h4>
        <p>{this.props.description}</p>
        <hr/>
        <div className="extra-forecast-data">
          <div className="extra-forecast-data-single wind">
            <img src="https://kranjska-gora.si/media/Vreme/ExtraData/veter.svg" alt="veter" />
            <small>{this.props.extra.wind} m/s</small>
          </div>
          <div className="extra-forecast-data-single clouds">
            <img src="https://kranjska-gora.si/media/Vreme/ExtraData/oblacnost.svg" alt="oblaki" />
            <small>{this.props.extra.clouds}%</small>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherForecastCard