import PropTypes from 'prop-types';
import { Input } from './SearchBox.styled';
import Box from 'components/Box';

const SearchBox = ({ onSubmit }) => {
  return (
    <Box as="form" onSubmit={onSubmit}>
      <Input name="query" autoComplete="off" placeholder="Search movies" />
      <button type="submit">Search</button>
    </Box>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
