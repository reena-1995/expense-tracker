import React, { Suspense, lazy } from "react"
import { Router, Switch, Route, Redirect } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"

// Route-based code splitting

const Login = lazy(() =>
  import("./views/pages/auth/Login")
)

const Register = lazy(() =>
  import("./views/pages/auth/Register")
)

const Transaction = lazy(() =>
  import("./views/pages/transactions/Transaction")
)



// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <React.Fragment>
          {user.loading?<p>loading...</p>:
            user.isAuthenticated  ? (
                <Component {...props} />
          )
           : (
            <React.Fragment>
              <Suspense fallback={<p>...loading</p>}>
                <Redirect to="/login" />
                <Component {...props} />
              </Suspense>
            </React.Fragment>
          )}
        </React.Fragment>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
        <AppRoute
            exact
            path="/login"
            component={Login}
          
          />
          <AppRoute
            exact
            path="/register"
            component={Register}
          
          />
          <AppRoute
            exact
            path="/"
            component={Transaction}
          />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
