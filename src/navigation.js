import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from './pages/Publications/Publications'
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import ShareThoughtsPage from "./pages/ShareThoughts/ShareThoughts"

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/share' component={ShareThoughtsPage} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
            </Switch>
        </BrowserRouter>

    )

}

export default Navigation