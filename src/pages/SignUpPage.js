import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState('');

  const auth = getAuth();

  function handleSignUp(e) {
    e.preventDefault();

    const mail = e.target.mail.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, mail, password)
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
    <main>
      <h3>Sign up</h3>
      <form onSubmit={handleSignUp}>
        <input type="email" name="mail" placeholder="Type your mail" />
        <input
          type="password"
          name="password"
          placeholder="Type your password"
        />
        <p className="text-error">{errorMessage}</p>
        <button>Sign Up</button>
      </form>
      <p className="text-center">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
    </main>
  );
}
