import { Typography } from '@mui/material'
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
        <h1 className={styles.title}>{title}</h1>

        <Content />
      </main>

      <Footer />
    </div>
  )
}

export default Home
