import Link from '../Link/Link';
import styles from './Header.module.css'

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <Link href="#" title="Going to 1" type="header"/>
            <Link href="#" title="Going to 2" type="header"/>
            <Link href="#" title="Going to 3" type="header"/>
        </nav>
    )
}

export default Header;
