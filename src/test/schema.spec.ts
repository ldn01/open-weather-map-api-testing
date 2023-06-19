import { makeUnitsRequest } from '../client/client'
import schema from '../schema'
import test_data from '../test_data'

const { metric } = test_data.units

it('should match expected schema', async () => {
  const metricResponse = await makeUnitsRequest(metric)
  expect(schema.validate(metricResponse.body).error).toBeUndefined()
})
