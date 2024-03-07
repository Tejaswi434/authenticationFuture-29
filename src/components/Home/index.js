import './index.css'

import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'

import Header from '../Header'

import LogoutButton from '../LogoutButton'

const Home = () => (
  <div>
    <Header />
    <h1>Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
