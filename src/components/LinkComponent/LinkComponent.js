import styles from './LinkComponent.module.css'
import { Link } from 'react-router-dom';

const LinkComponent = ({ title, href, type }) => {
    return (
        <div className={styles[`${type}-list-item`]}>
            <Link
                to={href} className={styles[`${type}-link`]}> {title}
            </Link>
        </div>

    )
}

export default LinkComponent;