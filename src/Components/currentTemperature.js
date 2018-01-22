class CurrentWeatherData extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="current-temperature">
        <p className="temp">
          <span className="num">{this.props.temp.current}</span>
          <span className="symbol">°C</span>
        </p>
        <div className="min-max-temp">
          <p className="min-temp">{this.props.temp.min}<span>°C</span></p>
          <hr />
          <p className="max-temp">{this.props.temp.max}<span>°C</span></p>
        </div>
        <img src={this.props.icon} />
      </div>
    )
  }
}

export default CurrentWeatherData