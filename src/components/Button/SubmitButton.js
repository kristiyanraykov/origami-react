import styles from './SubmitButton.module.css'

const SubmitButton = ({
    title
}) => {
    return (
        <button type="submit" className={styles.submit}>{title}</button>
    )
}

export default SubmitButton;