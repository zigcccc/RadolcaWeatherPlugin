export default class API {
  constructor(lat, lon, lang){
    this.api_base = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/",
    this.appID =  'a3f0075817792f8b87e1d24b9fa314f3',
    this.lat = lat,
    this.lon = lon,
    this.lang = lang,
    this.errMessage = 'Ups, something went wrong...',
    this.iconURL = "https://kranjska-gora.si/media/Vreme/"
  }

  currentWeather(){
    return `${this.api_base}weather?lat=${this.lat}&lon=${this.lon}&appid=${this.appID}&lang=${this.lang}`
    
  }
  forecast(){
    return `${this.api_base}forecast/?lat=${this.lat}&lon=${this.lon}&appid=${this.appID}&lang=${this.lang}`
  }

  getIconUrl(icon){
    return `${this.iconURL}${icon}.svg`
  }
}