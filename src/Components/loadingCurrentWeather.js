const LoadingElement = (props) => (
  <div className="current-weather-container">
    <img src="https://kranjska-gora.si/media/Vreme/loading-weather.gif" alt="loading weather..." />
    <p className="weather-description">
      {
        props.lang === 'sl'
        ? <small>Vreme v <strong>Kranjski Gori</strong> je trenutno <strong>_____________</strong>.</small>
        : <small><strong>_____________</strong> at the moment in <strong>Kranjska Gora</strong>.</small>
      }
    </p>
    <div className="current-temperature">
      <p className="temp">
        <span className="num">--</span>
        <span className="symbol">°C</span>
      </p>
      <div className="min-max-temp">
        <p className="min-temp">--<span>°C</span></p>
        <hr />
        <p className="max-temp">--<span>°C</span></p>
      </div>
    </div>
    <hr className="divider"/>
    <div className="extra-data-container">
      <div className="extra-data humidity">
        <img src="https://kranjska-gora.si/media/Vreme/ExtraData/vlaznost.svg" alt="vlaznost" />
        <small>
          {
            props.lang === 'sl'
            ? 'Vlažnost'
            : 'Humidity'
          }
        </small><span>--%</span>
        </div>
      <hr/>
      <div className="extra-data wind-speed">
        <img src="https://kranjska-gora.si/media/Vreme/ExtraData/veter.svg" alt="veter" />
        <small>
          {
            props.lang === 'sl'
            ? 'Veter'
            : 'Wind speed'
          }
        </small><span>-.- <small>m/s</small></span>
      </div>
      <hr/>
      <div className="extra-data clouds">
        <img src="https://kranjska-gora.si/media/Vreme/ExtraData/oblacnost.svg" alt="oblacnost" />
        <small>
          {
            props.lang === 'sl'
            ? 'Oblačnost'
            : 'Clouds'
          }
        </small><span>--%</span>
      </div>
    </div>
  </div>
)

export default LoadingElement