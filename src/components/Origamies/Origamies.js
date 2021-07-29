import styles from './Origamies.module.css'
import { useEffect, useState } from 'react';
import Origami from '../Origami/Origami';
const Origamies = () => {

    const [origamies, setOrigamies] = useState([]);

    const getOrigamies = () => {
        fetch('http://localhost:9999/api/origami')
            .then(res => res.json())
            .then(data => setOrigamies(data))
    }

    const renderOrigamies = () => {

        return origamies.map(x => {
            return (
                <Origami key={x._id} description={x.description}/>
            )
        })
    }
    useEffect(() => {
        getOrigamies()
    },[])

        return (
            <div className={styles.container}>
                <h1 className={styles.title}> Origamies </h1>
                <div className={styles['origamies-wrapper']}>
                    {renderOrigamies()}
                </div>
            </div>
        )
    }

    export default Origamies;