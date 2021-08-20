import image from '../../image/blue-origami-bird-flipped.png'

import { useContext } from 'react'

import styles from './Footer.module.css'
import LinkComponent from '../LinkComponent/LinkComponent'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

const Footer = () => {
    const userContext = useContext(UserContext)
    const {
        loggedIn,
        user
    } = userContext;
    const links = getNavigation(loggedIn, user);

    return (
        <footer className={styles.footer}>
            <div>
            {
                links.map(navElement => {
                    return (
                        <LinkComponent 
                        key={navElement.title}
                        href={navElement.link} 
                        title={navElement.title} 
                        type="footer" 
                        />

                    )
                })
            }
            <img src={image}/>
            </div>
            <p className={styles.uni}>Soft Uni</p>
        </footer>
    )
}

export default Footer;