import test_data from '../test_data'

export const assertInvalidAuthToken = (response: any) => {
  expect(response.status).toBe(401)
  expect(response.body.message).toBe(test_data.errorMessages.invalidAPIKey)
}

export const assertBadRequest = (response: any, message: string) => {
  expect(response.status).toBe(400)
  expect(response.body.message).toBe(message)
}
