import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import FrontPage from './pages/FrontPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
