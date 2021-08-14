import styles from './Login.module.css'

import { useEffect, useState } from 'react'

import SubmitButton from "../../components/Button/SubmitButton"
import Title from "../../components/Title/Title"
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Input from '../../components/Input/Input'
import authenticate from '../../utils/authenticate'

const Login = ({
    history
}) => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const handleChange = (event, type) => {
        switch (type) {
            case 'username':
                setUsername(event)
                break;
            case 'password':
                setPassword(event)
                break;
            default:
                return null;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await authenticate('http://localhost:9999/api/user/login', {
            username, password 
        }, () => {
            console.log('Logged in');
            history.push('/')
        }, (e) => {
            console.log('Error');
            console.log(e);
        }
        )
    }



    return (
        <PageWrapper>
            <form className={styles.container} onSubmit={handleSubmit}>
                <Title title={'Login'} />
                <Input
                    value={username}
                    onChange={(e) => handleChange(e.target.value, 'username')}
                    label='Username'
                    id='username'
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => handleChange(e.target.value, 'password')}
                    label='Password'
                    id='password'
                />

                <SubmitButton title={'Login'} />
            </form>

        </PageWrapper>
    )
}

export default Login
