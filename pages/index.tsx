import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
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
        <h1 className={styles.title}>{title}</h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://twitter.com/hyodoblog" target="_blank" rel="noopener noreferrer">
          <Typography variant="body1">Powered by</Typography>
          <Typography variant="body1" sx={{ ml: 1, textDecorationLine: 'underline' }}>
            hyodoblog
          </Typography>
        </a>
      </footer>
    </div>
  )
}

export default Home
