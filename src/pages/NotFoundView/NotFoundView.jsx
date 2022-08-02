import { Link } from 'react-router-dom';

const NotFoundView = () => {
  return (
    <h3>
      Oops, this page not found go to <Link to="/">Home page!</Link>
    </h3>
  );
};

export default NotFoundView;
