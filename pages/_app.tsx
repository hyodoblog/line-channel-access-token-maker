import '~/styles/globals.scss'

import type { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'

import { createEmotionCache } from '~/cache'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
  router
}: MyAppProps): JSX.Element {
  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <Component {...pageProps} key={router.asPath} />
    </CacheProvider>
  )
}
