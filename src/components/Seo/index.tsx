import Head from 'next/head'
import { SITE_TITLE } from '~/config'

interface Props {
  pageTitle?: string
  pageDescription: string
  pagePath: string
}

export const Seo = ({ pageTitle, pageDescription, pagePath }: Props) => {
  const defaultTitle = SITE_TITLE
  const defaultDescription = SITE_TITLE

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? pageDescription : defaultDescription
  const url = pagePath
  const imgUrl = 'https://line-channel-access-token-maker.vercel.app/ogp.png'
  const imgWidth = 1200
  const imgHeight = 630

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <meta property="og:title" content="ページのタイトル" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hyodoblog" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href={url} />
    </Head>
  )
}
