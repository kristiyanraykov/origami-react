import { useState } from "react"
import UserContext from "./Context"

const App = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    const logIn = (currentUser) => {
        setLoggedIn(true)
        setUser(currentUser)
    }

    const logOut = () => {
        setLoggedIn(false)
        setUser(null)
    }
    
    
    return (
        <UserContext.Provider value={{
            loggedIn,
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default App
