import { useSelector, useDispatch } from 'react-redux';
import { Div, Input, Span } from './Filter.styled';
import { onChangeInput } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleInput = e => {
    dispatch(onChangeInput(e.currentTarget.value));
  };

  return (
    <Div>
      <label>
        <Span>Find contacts by name</Span>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleInput}
        />
      </label>
    </Div>
  );
}
