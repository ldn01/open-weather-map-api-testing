import { makeRequestWithParamsAsString } from '../client/client'
import { assertInvalidAuthToken } from '../assertions/common_errors'

it('should return 401 when an invalid auth token is used', async () => {
  const response = await makeRequestWithParamsAsString(
    'lat=44.34&lon=10.99&appid=ABC',
  )
  assertInvalidAuthToken(response)
})

it('should return 401 when no auth token is used', async () => {
  const response = await makeRequestWithParamsAsString(
    'lat=44.34&lon=10.99&appid=',
  )
  assertInvalidAuthToken(response)
})

it('should return 401 when no appid param is used', async () => {
  const response = await makeRequestWithParamsAsString('lat=44.34&lon=10.99')
  assertInvalidAuthToken(response)
})
