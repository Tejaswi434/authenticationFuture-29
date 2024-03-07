// Write your JS code here

import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  const deleteCookie = () => {
    Cookies.remove('jwt_Token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <button onClick={deleteCookie} type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
