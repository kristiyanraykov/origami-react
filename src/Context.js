import React from 'react'

const UserContext = React.createContext({
    loggedIn: false,
    user: null,
    logIn: (curentUser) => {
        
    },
    logOut: () => {},
    
    
})

export default UserContext