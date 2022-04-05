import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiGetTokenReq, ApiGetTokenRes } from '~/types'

interface GetAccessTokenParams {
  access_token: string
  expires_in: number
  token_type: 'Bearer'
}

const getAccessToken = async (channelId: string, channelSecret: string): Promise<string> => {
  const url = 'https://api.line.me/v2/oauth/accessToken'
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')
  params.append('client_id', channelId)
  params.append('client_secret', channelSecret)
  const resp = await axios.post(url, params)

  if (resp.status !== 200) {
    throw new Error('res status is not 200.')
  }

  const resData = resp.data as GetAccessTokenParams

  return resData.access_token
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiGetTokenRes>) {
  try {
    const { channelId, channelSecret } = req.body as ApiGetTokenReq
    if (typeof channelId !== 'string' || !channelId || typeof channelSecret !== 'string' || !channelSecret) {
      throw new Error('req body is not found.')
    }

    console.info(channelId, channelSecret)

    const channelAccessToken = await getAccessToken(channelId, channelSecret)

    res.status(200).json({ channelAccessToken })
  } catch (err) {
    console.error(err)
    res.status(500).json({ channelAccessToken: 'not found.' })
  }
}
