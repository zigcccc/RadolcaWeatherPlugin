class CurrentWeatherData extends React.Component {
	constructor(props) {
		super(props);
	}
	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	render() {
		return (
			<div className="current-weather-container">
				<img src={this.props.icon} alt="Trenutno stanje vremena v Radovljici" />
				<p className="weather-description">
					{this.props.lang === 'sl' ? (
						<small>
							Vreme v <strong>Radovljici</strong> je trenutno{' '}
							<strong>{this.props.desc}</strong>.
						</small>
					) : (
						<small>
							<strong>{this.capitalizeFirstLetter(this.props.desc)}</strong> at
							the moment in <strong>Radovljica</strong>.
						</small>
					)}
				</p>
				<div className="current-temperature">
					<p className="temp">
						<span className="num">{this.props.temp.current}</span>
						<span className="symbol">°C</span>
					</p>
					<div className="min-max-temp">
						<p className="min-temp">
							{this.props.temp.min}
							<span>°C</span>
						</p>
						<hr />
						<p className="max-temp">
							{this.props.temp.max}
							<span>°C</span>
						</p>
					</div>
				</div>
				<hr className="divider" />
				<div className="extra-data-container">
					<div className="extra-data humidity">
						<img
							src="https://radolca.si/media/Vreme/ExtraData/vlaznost.svg"
							alt="vlaznost"
						/>
						<small>{this.props.lang === 'sl' ? 'Vlažnost' : 'Humidity'}</small>
						<span>{this.props.extra.humidity}%</span>
					</div>
					<hr />
					<div className="extra-data wind-speed">
						<img
							src="https://radolca.si/media/Vreme/ExtraData/veter.svg"
							alt="veter"
						/>
						<small>{this.props.lang === 'sl' ? 'Veter' : 'Wind speed'}</small>
						<span>
							{this.props.extra.windSpeed} <small>m/s</small>
						</span>
					</div>
					<hr />
					<div className="extra-data clouds">
						<img
							src="https://radolca.si/media/Vreme/ExtraData/oblacnost.svg"
							alt="oblacnost"
						/>
						<small>{this.props.lang === 'sl' ? 'Oblačnost' : 'Clouds'}</small>
						<span>{this.props.extra.clouds}%</span>
					</div>
				</div>
			</div>
		);
	}
}

export default CurrentWeatherData;
