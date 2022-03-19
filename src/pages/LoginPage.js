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
        <h1>Sign in</h1>
        <form onSubmit={login}>
          <input type="email" name="email"></input>
          <input type="password" name="password"></input>
          <button>Login</button>
        </form>
      </div>
    </main>
  );
}
