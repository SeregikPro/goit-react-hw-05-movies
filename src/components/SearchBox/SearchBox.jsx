import PropTypes from 'prop-types';
import { Wrapper, Input, Icon } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  return (
    <Wrapper>
      <Input name="query" autoComplete="off" placeholder="Search movies" />
      <button type="submit">
        <Icon />
      </button>
    </Wrapper>
  );
};

export default SearchBox;
