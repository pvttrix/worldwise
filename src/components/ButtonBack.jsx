import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function ButtonBack() {
  return (
    <Link
      className={(styles.back, styles.btn)}
      to={-1}
    >
      Back
    </Link>
  )
}

export default ButtonBack
