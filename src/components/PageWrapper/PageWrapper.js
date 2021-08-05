import styles from './PageWrapper.module.css'
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';

const PageWrapper = (props) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Aside />
                <div className={styles['inner-container']}>
                    {props.children}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PageWrapper