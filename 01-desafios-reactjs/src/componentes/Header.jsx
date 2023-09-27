import logo from './img/zlogo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logotipo" />
        </header>
    )
}