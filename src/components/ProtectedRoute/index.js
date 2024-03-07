import {Redirect, Route} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_Token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
