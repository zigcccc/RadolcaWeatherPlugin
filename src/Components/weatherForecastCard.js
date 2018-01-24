class WeatherForecastCard extends React.Component {
  render(){
    return(
      <div className="forecast-card">
        <h2 className="subtitle">{this.props.day}</h2>
        <h4 className="quote">{this.props.temp}°C</h4>
        <hr />
      </div>
    )
  }
}

export default WeatherForecastCard