import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

import { Dispatch } from 'react'

interface Props {
  token: string
  setToken: Dispatch<string>
}

export const TokenDisplayDialog = ({ token, setToken }: Props) => {
  const isDialog = !!token

  const handleClose = () => {
    setToken('')
  }

  return (
    <Dialog open={isDialog}>
      <DialogTitle>チャネルアクセストークン</DialogTitle>
      <DialogContent>{token}</DialogContent>

      <DialogActions>
        <Button color="error" onClick={handleClose}>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  )
}
