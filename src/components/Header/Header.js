import { useContext } from 'react';

import LinkComponent from '../LinkComponent/LinkComponent';
import styles from './Header.module.css'
import logo from '../../image/white-origami-bird.png'
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';

const Header = () => {
    const userContext = useContext(UserContext)
    const {
        loggedIn,
        user
    } = userContext;
    const links = getNavigation(loggedIn, user);
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
