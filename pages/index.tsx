import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Footer } from '~/components/Footer'
import { Seo } from '~/components/Seo'
import { SITE_DESCRIPTION, SITE_TITLE } from '~/config'
import { Content } from '~/content'
import styles from '~/styles/Home.module.css'

const Home: NextPage = () => {
  const title = SITE_TITLE
  const description = SITE_DESCRIPTION

  return (
    <div className={styles.container}>
      <Seo pageTitle={title} pageDescription={description} pagePath="/" />

      <main className={styles.main}>
        <Box sx={{ mt: -4, mb: 10, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 400, mb: 2 }}>
            {description}
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
