import styles from './Origamies.module.css'
import { useEffect, useState } from 'react';
import Origami from '../Origami/Origami';
const Origamies = () => {

    const [origamies, setOrigamies] = useState([]);
    const data = [
        {
            description: 'lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumagjsd;lgsdfalsdsafdlsg',

            author: 'kris',
            _id: 'q363469304532904',
        },
        {
            description: 'lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumagjsd;lgsdfalsdsafdlsg',
            author: 'not kris',
            _id: '5089438693049thdsjhgsd'
        },

    ]

    // const getOrigamies = () => {
    //     fetch('http://localhost:9999/api/origami')
    //         .then(res => res.json())
    //         .then(data => setOrigamies(data))
    // }


    const renderOrigamies = () => {

        return origamies.map((x, i) => {
            return (
                <Origami key={x._id} index={i} {...x} />
            )
        })
    }
    useEffect(() => {
        setOrigamies(data);
        // getOrigamies()
    }, [])

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