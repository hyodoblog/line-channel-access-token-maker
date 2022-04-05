import AssignmentIcon from '@mui/icons-material/Assignment'
import {
  Alert,
  Box,
  Button,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Tooltip,
  Typography
} from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Dispatch, useState, forwardRef, ReactElement } from 'react'
import { TransitionProps } from '@mui/material/transitions'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface Props {
  token: string
  setToken: Dispatch<string>
}

export const TokenDisplayDialog = ({ token, setToken }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const isDialog = !!token

  const handleClose = () => {
    setToken('')
  }

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  return (
    <Dialog open={isDialog} maxWidth="sm" fullWidth TransitionComponent={Transition} keepMounted>
      <DialogContent sx={{ p: 4 }}>
        <Alert severity="success">
          <Typography variant="body1">{token}</Typography>
        </Alert>
      </DialogContent>

      <DialogActions sx={{ p: 4 }}>
        <Button color="error" onClick={handleClose} sx={{ mr: 4 }}>
          閉じる
        </Button>

        <CopyToClipboard text={token}>
          <Typography variant="body2">
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Box>
                <Tooltip
                  PopperProps={{
                    disablePortal: true
                  }}
                  onClose={handleTooltipClose}
                  open={isOpen}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="コピー"
                >
                  <Button variant="outlined" onClick={handleTooltipOpen}>
                    コピー
                  </Button>
                </Tooltip>
              </Box>
            </ClickAwayListener>
          </Typography>
        </CopyToClipboard>
      </DialogActions>
    </Dialog>
  )
}
