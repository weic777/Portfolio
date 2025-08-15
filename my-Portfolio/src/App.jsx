import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import WorkPage from './pages/WorkPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
      {/* footer區 */}
      <Footer />
    </>
  );
}

export default App;
