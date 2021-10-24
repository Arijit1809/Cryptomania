import { Sidebar, Homepage, News, Exchanges, Cryptocurrencies,CryptoDetails } from './components';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <Switch>
                <Route path="/cryptocurrencies">
                    <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                    <CryptoDetails />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/exchanges">
                    <Exchanges />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </div>
    )
}

export default App
