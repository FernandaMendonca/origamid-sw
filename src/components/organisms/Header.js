import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Chewbacca } from '../../assets/chewie.svg';
// import { UserContext } from '../../helpers/UserContext';

const Header = () => {

  // const context = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Chewbacca - Home" className={styles.logo}>
          <Chewbacca />
        </Link>
        <Link to="/login" className={styles.login}>Login</Link>
      </nav>
    </header>
  )
}

export default Header