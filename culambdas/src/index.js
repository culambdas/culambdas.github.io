import { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Home = lazy(() => import('./Components/Home/Home'));
const ActiveHouse = lazy(() => import('./Components/ActiveHouse/ActiveHouse'));

ReactDOM.render(
  <StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/active-house" component={ActiveHouse} />
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
