import { makeUnitsRequest, getTemp } from '../client/client'
import { convertCelsiusToFahrenheit } from '../utils'
import test_data from '../test_data'

const { metric, imperial } = test_data.units

it('should return values in metric and imperial when specified in unit param', async () => {
  const metricResponse = await makeUnitsRequest(metric)
  const celsiusValue = getTemp(metricResponse)

  let expectedFahrenheit = convertCelsiusToFahrenheit(celsiusValue)

  const imperialResponse = await makeUnitsRequest(imperial)
  const fahrenheitValue = getTemp(imperialResponse)

  expect(Math.floor(fahrenheitValue)).toBe(Math.floor(expectedFahrenheit))
})
