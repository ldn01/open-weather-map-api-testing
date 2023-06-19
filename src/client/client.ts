import request from 'supertest'
import testData from '../test_data'

const { huntingdon } = testData.coordinates

export const makeCoordinatesRequest = async (lat: number, lon: number) => {
  return await request('https://api.openweathermap.org').get(
    `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
  )
}

export const makeModeRequest = async (mode: string) => {
  return await request('https://api.openweathermap.org').get(
    `/data/2.5/weather?lat=${huntingdon.lat}&lon=${huntingdon.lon}&mode=${mode}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`,
  )
}

export const makeUnitsRequest = async (units: string) => {
  return await request('https://api.openweathermap.org').get(
    `/data/2.5/weather?lat=${huntingdon.lat}&lon=${huntingdon.lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=${units}`,
  )
}

export const makeRequestWithParamsAsString = async (params: string) => {
  return await request('https://api.openweathermap.org').get(
    `/data/2.5/weather?${params}`,
  )
}

export const getTemp = (request: any) => {
  return request.body.main.temp
}
