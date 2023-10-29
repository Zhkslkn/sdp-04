const factory = new WeatherStationFactory()
const weatherStation = new WeatherStation()

const temperatureObserver = new WeatherObserver('Temperature Observer')
const humidityObserver = new WeatherObserver('Humidity Observer')

weatherStation.addObserver(temperatureObserver)
weatherStation.addObserver(humidityObserver)

weatherStation.setWeatherData(25)
weatherStation.setWeatherData(70)
console.log(weatherStation.observers)

const temperatureStation = factory
  .createWeatherStation('Temperature')
  .reportTemperature(22)

const humidityStation = factory
  .createWeatherStation('Humidity')
  .reportHumidity(65)
