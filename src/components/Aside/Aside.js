import LinkComponent from '../LinkComponent/LinkComponent'

import { useContext } from 'react'

import styles from './Aside.module.css'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

const Aside = () => {
    const userContext = useContext(UserContext)
    const {
        loggedIn,
        user
    } = userContext;
    const links = getNavigation(loggedIn, user);
    return (
            <aside className={styles.aside}>
            {
                links.map(navElement => {
                    return (
                        <LinkComponent 
                        key={navElement.title}
                        href={navElement.link} 
                        title={navElement.title} 
                        type="aside" 
                        />

                    )
                })
            }
            </aside>
    )
}

export default Aside;