import styles from './Login.module.css'

import { useEffect, useState } from 'react'

import SubmitButton from "../../components/Button/SubmitButton"
import Title from "../../components/Title/Title"
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Input from '../../components/Input/Input'

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    const onChange = (event, type) => {
        switch (type) {
            case 'email':
                setEmail(event)
                break;
            case 'password':
                setPassword(event)
                break;
            default:
                return null;
        }
    }

    return (
        <PageWrapper>
            <div className={styles.container}>
                <Title title={'Login'} />
                <Input
                    value={email}
                    onChange={(e) => onChange(e.target.value, 'email')}
                    label='Email'
                    id='email'
                />
                <Input
                    value={password}
                    onChange={(e) => onChange(e.target.value, 'password')}
                    label='Password'
                    id='password'
                />

                <SubmitButton title={'Login'} />
            </div>

        </PageWrapper>
    )
}

export default Login
