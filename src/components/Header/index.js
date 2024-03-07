// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="rowing">
    <li>
      <Link to="/"> Home </Link>{' '}
    </li>{' '}
    <li>
      {' '}
      <Link to="/about"> Route </Link>
    </li>{' '}
  </ul>
)

export default Header
