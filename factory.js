class WeatherStationFactory {
  createWeatherStation(type) {
    switch (type) {
      case 'Temperature':
        return new TemperatureStation()
      case 'Humidity':
        return new HumidityStation()
      default:
        throw new Error('Invalid weather station type')
    }
  }
}

class TemperatureStation {
  reportTemperature(temperature) {
    console.log(`Temperature station reports temperature: ${temperature}°C`)
  }
}

class HumidityStation {
  reportHumidity(humidity) {
    console.log(`Humidity station reports humidity: ${humidity}%`)
  }
}
