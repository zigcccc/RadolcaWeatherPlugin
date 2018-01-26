class ErrorComponent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.msg)
    return(
      <div className="error-message">
        <img src="https://kranjska-gora.si/media/Vreme/error_image.svg" alt="Error" />
        {
          this.props.lang === 'sl'
          ? (
            <div>
              <h3 className="error-title">Opravičujemo se, prišlo je do napake...</h3>
              <p className="error-text">Vrsta napake: {this.props.msg}</p>
              <button className="error-btn" onClick={() => this.props.refresh()}>Poizkusite ponovno</button>
            </div>
          )
          : (
            <div>
              <h3 className="error-title">Sorry, there was an error while loading data...</h3>
              <p className="error-text">Error: {this.props.msg}</p>
              <button className="error-btn" onClick={() => this.props.refresh()}>Try again</button>
            </div>
          )
        }
      </div>
    )
  }
} 

export default ErrorComponent