export interface ApiGetTokenReq {
  channelId: string
  channelSecret: string
}

export interface ApiGetTokenRes {
  channelAccessToken: string
}
