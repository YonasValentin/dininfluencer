import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <NavLink to="/">Logo</NavLink>
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
