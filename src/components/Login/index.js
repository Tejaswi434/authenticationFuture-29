import './index.css'

import {Component} from 'react'

import {Redirect, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

class Login extends Component {
  gettingLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_Token', jwtToken, {expires: 30})
    history.push('/home')
  }

  change = async () => {
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
      this.gettingLogin(response.jwt_Token)
      console.log(result.ok)
    } else {
      ;<Redirect to="/login" />
    }
  }

  render() {
    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={this.change}>
          Login with sample creds
        </button>
      </div>
    )
  }
}
export default withRouter(Login)
