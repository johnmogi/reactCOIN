import '../scss/style.css'

import Footer from './footer'
import HeaderTheme from './header'

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/home';
import Coins from '../pages/coins';

export default function Layout(){
    return (
<BrowserRouter>
        <div className="container mx-auto px-10">
        <HeaderTheme/>
        <hr/>
        <div className="main Layout">
        <Switch>
                            <Route path="/home" component={Home} exact />
                            <Route path="/coins" component={Coins} exact />
                            <Redirect from="/" to="/home" exact />
                        </Switch>
        </div>
        <hr/>
        <Footer/>
        </div>
        </BrowserRouter>
    )
}