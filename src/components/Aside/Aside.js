import LinkComponent from '../LinkComponent/LinkComponent'
import styles from './Aside.module.css'
import getNavigation from '../../utils/navigation'

const Aside = () => {
    const links = getNavigation();
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