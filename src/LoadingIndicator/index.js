import React, { PropTypes } from 'react'
import styles from './styles.css'

const LoadingIndicator = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div className={styles.bounce3} />
    </div>
  )
}

export default LoadingIndicator
