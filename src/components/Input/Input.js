import { useState } from 'react';
import { StyledInput } from './Input.styles';

export const Input = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const submitHandler = (e) => {
    if (e.code === 'Enter') {
      onSearch(value);
      e.target.value = '';
    }
  };
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <StyledInput
      placeholder="Search by city..."
      type="text"
      onKeyDown={submitHandler}
      onChange={changeHandler}
    />
  );
};
