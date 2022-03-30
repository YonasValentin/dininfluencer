import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import FrontPage from './pages/FrontPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import InfluencerOverview from './pages/InfluencerOverview';
import MultiStepForm from './multi-step-form/MultiStepForm';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/overview" element={<InfluencerOverview />}></Route>
        <Route
          path="/influencer-overview"
          element={<InfluencerOverview />}
        ></Route>
        <Route path="/multistepform" element={<MultiStepForm />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
