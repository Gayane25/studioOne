import { FC } from 'react';
import { InputType } from '../../utils/types';
import { useStyles } from './Input.styles';

interface InputProps {
  type: InputType;
  placeholder: string;
  label?: string;
  onInputChange: (value: string) => void;
  value: string;
}
const Input: FC<InputProps> = ({ type, placeholder, value, onInputChange }) => {
  const classes = useStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className={classes.root}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
