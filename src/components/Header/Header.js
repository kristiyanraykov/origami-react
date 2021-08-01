import Link from '../Link/Link';
import styles from './Header.module.css'
import logo from '../../image/white-origami-bird.png'
const Header = () => {
    return (
        <nav className={styles.navigation}>
            <img src={logo}/>
            <Link href="#" title="Going to 1" type="header"/>
            <Link href="#" title="Going to 2" type="header"/>
            <Link href="#" title="Going to 3" type="header"/>
        </nav>
    )
}

export default Header;
