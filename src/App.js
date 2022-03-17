import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/global/Nav';
import FrontPage from './pages/FrontPage';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
