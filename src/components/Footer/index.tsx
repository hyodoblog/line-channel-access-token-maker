import { Typography } from '@mui/material'
import styles from '~/styles/Home.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://twitter.com/hyodoblog" target="_blank" rel="noopener noreferrer">
        <Typography variant="body1">Powered by</Typography>
        <Typography variant="body1" sx={{ ml: 1, textDecorationLine: 'underline' }}>
          hyodoblog
        </Typography>
      </a>
    </footer>
  )
}
