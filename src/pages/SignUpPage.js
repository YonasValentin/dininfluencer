import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import '../firebase-config';

export default function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState('');

  const auth = getAuth();

  function handleSignUp(e) {
    e.preventDefault();
    const mail = e.target.mail.value; // mail value from inout field in sign in form
    const password = e.target.password.value; // password value from inout field in sign in form

    // read the docs: https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
    createUserWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Created and signed in
        const user = userCredential.user;
        console.log(user); // for test purposes: logging the authenticated user
      })
      .catch((error) => {
        let code = error.code; // saving error code in variable
        console.log(code);
        code = code.replaceAll('-', ' '); // some JS string magic to display error message. See the log above in the console
        code = code.replaceAll('auth/', '');
        setErrorMessage(code);
      });
  }

  return (
    <main className="sign-up-page">
      <div className="sign-up-page__container">
        <h1>Sign Up</h1>
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
      </div>
    </main>
  );
}
