// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiGetTokenReq, ApiGetTokenRes } from '~/types'

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiGetTokenRes>) {
  try {
    const { secretKey } = req.body as ApiGetTokenReq
    if (typeof secretKey !== 'string' || !secretKey) {
      throw new Error('req body is not found.')
    }

    res.status(200).json({ channelAccessToken: 'John Doe' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ channelAccessToken: 'not found.' })
  }
}
