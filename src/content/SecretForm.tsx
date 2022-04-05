import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Card, CircularProgress, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'

import { ApiGetTokenReq } from '~/types'
import { Dispatch, useState } from 'react'
import { getAccessToken } from '~/utils/api'

const schema = yup.object({
  channelId: yup.string().min(10, '10文字').max(10, '10文字').required('必須'),
  channelSecret: yup.string().min(32, '32文字').max(32, '32文字').required('必須')
})

interface Props {
  setToken: Dispatch<string>
}

export const SecretForm = ({ setToken }: Props) => {
  const [isSubmitLoading, setSubmitLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<ApiGetTokenReq>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<ApiGetTokenReq> = async ({ channelSecret, channelId }) => {
    setSubmitLoading(true)

    try {
      const { channelAccessToken } = await getAccessToken({ channelSecret, channelId })
      setToken(channelAccessToken)
    } catch (err) {
      setErrorMessage('チャネルアクセストークンの発行に失敗しました')
      setTimeout(() => setErrorMessage(''), 3000)
    }

    setSubmitLoading(false)
  }

  return (
    <Card sx={{ borderRadius: 4, p: 4, pb: 6, maxWidth: 600, width: '100%' }}>
      <Container maxWidth="sm">
        <Grid container alignItems="center">
          {/* チャネルID */}
          <>
            <Grid item xs={4} sx={{ textAlign: 'right' }}>
              <Typography variant="body1" sx={{ mb: 2, mr: 4, fontWeight: 'bold' }}>
                チャネルID
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                disabled={isSubmitLoading}
                error={'channelId' in errors}
                helperText={errors.channelId?.message}
                type="text"
                sx={{ width: '100%' }}
                {...register('channelId')}
              />
            </Grid>
          </>

          <Grid item xs={12} sx={{ p: 2 }} />

          {/* チャネルシークレット */}
          <>
            <Grid item xs={4} sx={{ textAlign: 'right' }}>
              <Typography variant="body1" sx={{ mb: 2, mr: 4, fontWeight: 'bold' }}>
                チャネルシークレット
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                disabled={isSubmitLoading}
                error={'channelSecret' in errors}
                helperText={errors.channelSecret?.message}
                type="text"
                sx={{ width: '100%' }}
                {...register('channelSecret')}
              />
            </Grid>
          </>

          {/* ボタン */}
          <Grid item xs={12} sx={{ mt: 6, textAlign: 'center' }}>
            <Button
              startIcon={isSubmitLoading && <CircularProgress size="1rem" />}
              disabled={isSubmitLoading}
              variant="contained"
              size="large"
              onClick={handleSubmit(onSubmit)}
            >
              発行
            </Button>
          </Grid>

          {/* エラーメッセージ */}
          {!!errorMessage && (
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography variant="body1" color="error">
                {errorMessage}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Card>
  )
}
