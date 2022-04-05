import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '~/components/Footer'
import { Content } from '~/content'
import styles from '~/styles/Home.module.css'

const Home: NextPage = () => {
  const title = 'LINEチャネルアクセストークンメーカー'

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box sx={{ mt: -4, mb: 10, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 400, mb: 2 }}>
            短期のチャネルアクセストークンが発行できるサービスです。
          </Typography>
          <Typography variant="body2">
            <a
              href="https://developers.line.biz/ja/reference/messaging-api/#issue-shortlived-channel-access-token"
              target="_blank"
              style={{ textDecorationLine: 'underline' }}
            >
              使用しているAPI
            </a>
          </Typography>
        </Box>

        <Content />
      </main>

      <Footer />
    </div>
  )
}

export default Home
