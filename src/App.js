import { Sidebar, Homepage, News, Exchanges, Cryptocurrencies, CryptoDetails } from './components';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="flex font-Poppins">
            <Sidebar />
            <div className="w-4/5 h-screen overflow-auto bg-gray-100">
                <Switch>
                    <Route exact path="/cryptocurrencies">
                        <Cryptocurrencies />
                    </Route>
                    <Route exact path="/crypto/:coinId">
                        <CryptoDetails />
                    </Route>
                    <Route exact path="/news">
                        <News />
                    </Route>
                    <Route exact path="/exchanges">
                        <Exchanges />
                    </Route>
                    <Route exact path="/home">
                        <Homepage />
                    </Route>
                    <Route path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App
