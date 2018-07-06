import API from '../api';
import CurrentWeatherContainer from './Components/currentWeatherContainer';
import WeatherForecast from './Components/weatherForecast';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			api: null,
			lang: null
		};
	}
	componentWillMount() {
		this.setState({
			...this.state,
			api: new API(
				46.4845,
				13.7857,
				window.location.pathname.indexOf('/sl/') === -1 ? 'en' : 'sl'
			),
			lang: window.location.pathname.indexOf('/sl/') === -1 ? 'en' : 'sl'
		});
	}
	render() {
		return (
			<div className="container">
				<CurrentWeatherContainer api={this.state.api} lang={this.state.lang} />
				<br />
				<h2 id="forecast-title" className="subtitle">
					{this.state.lang === 'sl'
						? 'Vreme v prihodnjih dneh:'
						: 'Weather forecast:'}
				</h2>
				<WeatherForecast api={this.state.api} lang={this.state.lang} />
			</div>
		);
	}
}

export default Main;
