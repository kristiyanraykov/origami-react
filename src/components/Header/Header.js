import LinkComponent from '../LinkComponent/LinkComponent';
import styles from './Header.module.css'
import logo from '../../image/white-origami-bird.png'
import getNavigation from '../../utils/navigation';

const Header = () => {
    const links = getNavigation();
    return (
        <nav className={styles.navigation}>
            <img src={logo} />
            {
                links.map(navElement => {
                    return (
                        <LinkComponent 
                        key={navElement.title}
                        href={navElement.link} 
                        title={navElement.title} 
                        type="header" 
                        />

                    )
                })
            }

        </nav>
    )
}

export default Header;
