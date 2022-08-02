import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <h3>
      Oops, this page not found go to <Link to="/">Home page!</Link>
    </h3>
  );
};

export default NotFoundPage;
