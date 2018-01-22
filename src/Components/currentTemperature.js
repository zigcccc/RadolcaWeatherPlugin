class CurrentWeatherData extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="current-temperature">
        <img src={this.props.icon} />
        <p className="temp">
          <span className="num">{this.props.temp}</span>
          <span className="symbol">°C</span>
        </p>
      </div>
    )
  }
}

export default CurrentWeatherData