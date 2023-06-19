import {
  makeCoordinatesRequest,
  makeRequestWithParamsAsString,
} from '../client/client'
import { assertBadRequest } from '../assertions/common_errors'
import test_data from '../test_data'
import { getAppId } from '../utils'

const { huntingdon } = test_data.coordinates
const appId = getAppId()

it('should return 400 when an invalid coordinates are used', async () => {
  const response = await makeCoordinatesRequest(999, 999)
  assertBadRequest(response, 'wrong latitude')
})

it('should return 400 when an invalid longitude', async () => {
  const response = await makeCoordinatesRequest(huntingdon.lat, 999)
  assertBadRequest(response, 'wrong longitude')
})

it('should return 400 when an invalid latitude', async () => {
  const response = await makeCoordinatesRequest(999, huntingdon.lon)
  assertBadRequest(response, 'wrong latitude')
})

it('should return 400 when no lon param is used', async () => {
  const response = await makeRequestWithParamsAsString(
    `lat=44.34&appid=${appId}`,
  )
  assertBadRequest(response, 'Nothing to geocode')
})

it('should return 400 when no lat param is used', async () => {
  const response = await makeRequestWithParamsAsString(
    `lon=10.99&appid=${appId}`,
  )
  assertBadRequest(response, 'Nothing to geocode')
})
