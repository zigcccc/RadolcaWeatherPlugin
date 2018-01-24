export default class API {
  constructor(lat, lon){
    this.api_base = "http://api.openweathermap.org/data/2.5/",
    this.appID = 'a3f0075817792f8b87e1d24b9fa314f3',
    this.lat = lat,
    this.lon = lon,
    this.errMessage = 'Ups, something went wrong...',
    this.iconURL = "http://openweathermap.org/img/w/"
  }

  currentWeather(){
    return `${this.api_base}weather?lat=${this.lat}&lon=${this.lon}&appid=${this.appID}&lang=sl`
    
  }

  forecast(){
    return `${this.api_base}forecast/?lat=${this.lat}&lon=${this.lon}&appid=${this.appID}&lang=sl`
  }

  getIconUrl(icon){
    return `${this.iconURL}${icon}.png`
  }
}