import { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/Helpers/ScrollToTop';
import Loader from './Components/Loader/Loader';
import './assets/styles.css';

const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Home = lazy(() => import('./Components/Home/Home'));
const Leadership = lazy(() => import('./Components/Leadership/Leadership'));
const ActiveHouse = lazy(() => import('./Components/Members/ActiveHouse'));
const Roster = lazy(() => import('./Components/Members/Roster'));
const Rush = lazy(() => import('./Components/Rush/Rush'));
const About = lazy(() => import('./Components/About/About'));
const Footer = lazy(() => import('./Components/Footer/Footer'));

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/leadership" element={<Leadership />} />
          <Route exact path="/active-house" element={<ActiveHouse />} />
          <Route exact path="/roster" element={<Roster />} />
          <Route exact path="/rush" element={<Rush />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Suspense>
    </HashRouter>
  );
};

export default App;
