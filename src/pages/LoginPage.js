import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../firebase-config';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const auth = getAuth();

  function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        let code = error.code;
        console.log(code);
        code = code.replaceAll('-', ' ');
        code = code.replaceAll('auth/', '');
        setErrorMessage(code);
      });
  }
  return (
    <main className="login-page">
      <div className="login-page__container">
        <article className="login-page__form-wrapper">
          <h1>Login</h1>
          <form onSubmit={login}>
            <label>
              E-mail
              <input type="email" name="email"></input>
            </label>
            <label>
              Password
              <input type="password" name="password"></input>
            </label>
            <button>Login</button>
          </form>
        </article>
      </div>
    </main>
  );
}
