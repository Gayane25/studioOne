import { FC } from 'react';
import { useStyles } from './TextInput.styles';

interface TextInputProps {
  placeholder: string;
  label: string;
  onTextInputChange: (value: string) => void;
  value: string;
}
const TextInput: FC<TextInputProps> = ({
  placeholder,
  label,
  value,
  onTextInputChange,
}) => {
  const classes = useStyles();

  const handleTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextInputChange(e.target.value);
  };

  return (
    <label className={classes.root}>
      <div className={classes.flex}>
        <span className={classes.label}>{label}</span>
        <textarea
          value={value}
          rows={4}
          cols={62}
          placeholder={placeholder}
          onChange={handleTextInputChange}
        ></textarea>
      </div>
    </label>
  );
};

export default TextInput;
