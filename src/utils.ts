export const getAppId = () => {
  return process.env.OPEN_WEATHER_MAP_API_KEY
}

export const convertCelsiusToFahrenheit = (celsiusValue: number) => {
  return (celsiusValue * 9) / 5 + 32
}
