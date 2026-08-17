import './notfound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section id="not-found">
      <div className="not-found-content">
        <h2>Page Not Found</h2>
        <p>
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <Link className="not-found-home" to="/">
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
