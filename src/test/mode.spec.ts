import { makeCoordinatesRequest, makeModeRequest } from '../client/client'
import test_data from '../test_data'
import { getAppId } from '../utils'

const { huntingdon } = test_data.coordinates
const appId = getAppId()

it('should JSON weather report when no mode is supplied', async () => {
  const response = await makeCoordinatesRequest(huntingdon.lat, huntingdon.lon)
  expect(response.body.coord.lat).toBe(huntingdon.lat)
  expect(response.body.coord.lon).toBe(huntingdon.lon)
})

it('should XML weather report when XML mode is supplied', async () => {
  const response = await makeModeRequest('xml')
  expect(response.text).toContain('<?xml version="1.0" encoding="UTF-8"?>')
  expect(response.text).toContain('<coord lon="-0.1819" lat="52.3316"></coord>')
})

it('should allow weather report when HTML mode is supplied', async () => {
  const response = await makeModeRequest('html')
  expect(response.text).toContain('<!DOCTYPE html>')
  expect(response.text).toContain('title="Current Temperature"')
})

it('should allow JSON weather report when JSON mode is supplied', async () => {
  const response = await makeModeRequest('json')
  expect(response.body.coord.lat).toBe(huntingdon.lat)
  expect(response.body.coord.lon).toBe(huntingdon.lon)
})
