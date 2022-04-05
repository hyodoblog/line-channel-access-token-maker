import { Box, Typography } from '@mui/material'
import { SITE_TITLE } from '~/config'
import styles from '~/styles/Home.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Box sx={{ textAlign: 'center' }}>
        <a href="https://twitter.com/hyodoblog" target="_blank" rel="noopener noreferrer">
          <Typography variant="caption">Powered by</Typography>
          <Typography variant="caption" sx={{ ml: 1, textDecorationLine: 'underline' }}>
            hyodoblog
          </Typography>
        </a>

        <Typography variant="caption">Copyright © 2022 {SITE_TITLE}.</Typography>
      </Box>
    </footer>
  )
}
