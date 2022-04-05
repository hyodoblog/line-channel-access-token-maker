import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Card, CircularProgress, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'

import { ApiGetTokenReq } from '~/types'
import { Dispatch, useState } from 'react'
import { getAccessToken } from '~/utils/api'

const schema = yup.object({
  secretKey: yup.string().min(1, '1文字以上').max(30, '30文字以内').required('必須')
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

  const onSubmit: SubmitHandler<ApiGetTokenReq> = async ({ secretKey }) => {
    setSubmitLoading(true)

    try {
      const { channelAccessToken } = await getAccessToken({ secretKey })
      setToken(channelAccessToken)
    } catch (err) {
      setErrorMessage('チャネルアクセストークンの発行に失敗しました')
      setTimeout(() => setErrorMessage(''), 3000)
    }

    setSubmitLoading(false)
  }

  return (
    <Card sx={{ borderRadius: 4, p: 4, pb: 6, maxWidth: 500, width: '100%' }}>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              シークレットキー
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={isSubmitLoading}
              error={'secretKey' in errors}
              helperText={errors.secretKey?.message}
              type="text"
              sx={{ width: '100%' }}
              {...register('secretKey')}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 4, textAlign: 'center' }}>
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
