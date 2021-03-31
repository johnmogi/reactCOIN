## revisiting an old project but making some changes:


no db - local storage // nosql // graphql

react app - SPA

0. tallywind - don't do : npm install tailwindcss: 
https://tailwindcss.com/docs/guides/create-react-app
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npm install @craco/craco

further extend into react:
https://emortlock.github.io/tailwind-react-ui/#installation

api to coins and process.
https://www.coinapi.io/
https://docs.coinapi.io/#output-data-format

26ED6E1D-71CD-4789-9181-60AAA7A8C626

http://rest-sandbox.coinapi.io/v1/exchanges
X-CoinAPI-Key

expand details // search for coin // add to liked

0. npx create-react-app webcoin 

0. browser router:
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
  <BrowserRouter>
    <Switch>
                            <Route path="/home" component={Home} exact />
                            <Route path="/products" component={Products} exact />
                            <Route path="/products/new" component={Insert} exact />
                            <Route path="/products/:prodID" component={Details} exact />
                            <Route path="/about" component={About} exact />
                            <Redirect from="/" to="/home" exact />
                            <Route component={PageNotFound} />
                        </Switch>
                        import { NavLink } from "react-router-dom";
      <div className="menu">
                <NavLink to="/home" activeClassName="active-route" exact>Home</NavLink>
                <NavLink to="/products" activeClassName="active-route" exact>Products</NavLink>
                <NavLink to="/about" activeClassName="active-route" exact>About</NavLink>
            </div>

0. simple function:
    const getCurrentYear = () => new Date().getUTCFullYear();
{getCurrentYear()}

0. // hook into fetch: // https://rapidapi.com/blog/react-hooks-fetch-data-api/
npm install --save axios 
import axios from 'axios'
 let [responseData, setResponseData] = React.useState(''); 
  React.useEffect(() => {
    setResponseData('hello')
    console.log(responseData)
  }, [setResponseData, responseData])
  .env
REACT_APP_API_KEY=yourapikey
// this works but not quite: (it does not store the state correctly)
React.useEffect(() => {
    axios({
        "method": "GET",
        "url": "http://rest-sandbox.coinapi.io/v1/exchanges",
        "headers": {
        'X-CoinAPI-Key': '26ED6E1D-71CD-4789-9181-60AAA7A8C626'
        }
      })
      .then((response) => {
        console.log(response.data)
        state.push(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
}, [])
// this should work - test it without auth at first:
https://blog.logrocket.com/patterns-for-data-fetching-in-react-981ced7e5c56/

