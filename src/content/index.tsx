import { useState } from 'react'
import { SecretForm } from './SecretForm'
import { TokenDisplayDialog } from './TokenDisplayDialog'

export const Content = () => {
  const [token, setToken] = useState<string>('')

  return (
    <>
      <SecretForm setToken={setToken} />

      <TokenDisplayDialog token={token} setToken={setToken} />
    </>
  )
}
