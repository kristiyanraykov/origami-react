import styles from './Origami.module.css'
import logo from '../../image/blue-origami-bird.png'

const Origami = ({
    description,
    author,
    index
}) => {
    return (
        <div className={styles.container}>

            <img className={styles['origami-image']} src={logo}/>
            <p className={styles.description}>
                <span>{index + 1} -</span>
                {description}
            </p>
            <div className={styles['author-wrapper']}>
                <span className={styles.author}>
                    <small>Author:</small>
                    {author}
                </span>
            </div>
        </div>
    )
}

export default Origami;