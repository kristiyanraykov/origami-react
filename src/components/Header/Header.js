import Link from '../Link/Link';
import styles from './Header.module.css'

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <Link href="#" title="Going to 1"/>
                <Link href="#" title="Going to 2"/>
                <Link href="#" title="Going to 3"/>
                <Link href="#" title="Going to 4"/>

                
            </ul>
        </nav>
    )
}

export default Header;
