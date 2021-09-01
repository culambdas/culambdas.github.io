import { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

ReactDOM.render(
  <StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/leadership" component={Leadership} />
          <Route exact path="/active-house" component={ActiveHouse} />
          <Route exact path="/roster" component={Roster} />
          <Route exact path="/rush" component={Rush} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
