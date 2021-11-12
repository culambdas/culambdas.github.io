import { StrictMode, Suspense, lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Home = lazy(() => import('./Components/Home/Home'));
const Leadership = lazy(() => import('./Components/Leadership/Leadership'));
const ActiveHouse = lazy(() => import('./Components/Members/ActiveHouse'));
const Roster = lazy(() => import('./Components/Members/Roster'));
const Rush = lazy(() => import('./Components/Rush/Rush'));
const About = lazy(() => import('./Components/About/About'));
const Footer = lazy(() => import('./Components/Footer/Footer'));

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
