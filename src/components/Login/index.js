import './index.css'

import {Redirect, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const Login = props => {
  const gettingLogin = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }
  const change = async () => {
    const data = {
      username: 'rahul',
      password: 'rahul@2021',
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }

    const result = await fetch(url, options)
    const response = await result.json()

    if (result.ok === true) {
      gettingLogin(response.jwt_Token)
      console.log(result.ok)
    } else {
      ;<Redirect to="/login" />
    }
  }

  const Finding = Cookies.get('jwt_token')
  if (Finding !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={change}>
        Login with sample creds
      </button>
    </div>
  )
}

export default withRouter(Login)
