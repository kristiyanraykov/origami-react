import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from './pages/Publications/Publications'
import ShareThoughtsPage from "./pages/ShareThoughts/ShareThoughts"

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/share' component={ShareThoughtsPage} />
            </Switch>
        </BrowserRouter>

    )

}

export default Navigation