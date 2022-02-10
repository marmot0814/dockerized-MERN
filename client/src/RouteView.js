import { Switch, Route, withRouter } from "react-router"

import NotFoundPage from './pages/NotFound'

const RouteView = () => {
  return (
    <Switch>
      {/* new route: <Route exact path="" component={Page Component}/> */}
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default withRouter(RouteView)