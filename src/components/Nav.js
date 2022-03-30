import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <NavLink className="nav__logo" to="/">
          <img src={logo} alt="logo af din influencer hjemmeside"></img>
        </NavLink>
        <div className="nav__login-wrapper">
          <NavLink className="nav__login" to="/login">
            Login
          </NavLink>
          <NavLink className="nav__sign-up" to="/sign-up">
            Sign up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
