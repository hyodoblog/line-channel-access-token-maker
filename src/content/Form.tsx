import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Card, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'

import { ApiGetTokenReq } from '~/types'
import { useState } from 'react'

const schema = yup.object({
  secretKey: yup.string().min(1, '1文字以上').max(30, '30文字以内').required('必須')
})

export const Form = () => {
  const [isSubmitLoading, setSubmitLoading] = useState<boolean>(false)
  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<ApiGetTokenReq>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<ApiGetTokenReq> = async ({ secretKey }) => {
    setSubmitLoading(true)
    setSubmitLoading(false)
  }

  return (
    <Card sx={{ borderRadius: 4, p: 4, pb: 6, maxWidth: 500, width: '100%' }}>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
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

          <Grid>
            <Button>発行</Button>
          </Grid>
        </Grid>
      </Container>
    </Card>
  )
}
