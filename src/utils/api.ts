import { ApiGetTokenReq, ApiGetTokenRes } from '~/types'

export const getAccessToken = async (body: ApiGetTokenReq): Promise<ApiGetTokenRes> => {
  const response = await fetch('/api/get-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (response.status !== 200) {
    const error = await response.text()
    throw new Error(error)
  }

  return await response.json()
}
