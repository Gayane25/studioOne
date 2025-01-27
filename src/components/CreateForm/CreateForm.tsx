import { FC, FormEvent, useCallback, useState } from 'react';
import { useStyles } from './CreateForm.styles';
import { Input } from '../Input';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { addNews } from '../../store/News/newsSlice';

interface CreateFormProps {
  title?: string;
  image?: string;
  onClick?: () => void;
  closeForm?: (arg: boolean) => void;
  inputLabel?: string;
  textLabel?: string;
}
const CreateForm: FC<CreateFormProps> = ({
  title = 'Add News',
  inputLabel = 'add title for your news',
  textLabel = 'Please describe News',
  onClick,
  closeForm,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [textValue, setTextValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(
      addNews({
        id: Math.random().toString(36).substr(2, 9),
        title: inputValue,
        description: textValue,
        image: '',
      })
    );
    handleInputChange('');
    handleTextValue('');
    closeForm();
  }

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleTextValue = useCallback(
    (value: string) => {
      setTextValue(value);
    },

    [textValue]
  );

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <Input
        type={'text'}
        placeholder={'Enter news title'}
        label={inputLabel}
        onInputChange={handleInputChange}
        value={inputValue}
      />
      <TextInput
        placeholder={textLabel}
        label={textLabel}
        onTextInputChange={handleTextValue}
        value={textValue}
      />
      <div className={classes.buttonGroup}>
        <Button type="cancel" title="Cancel" onClick={closeForm} />
        <Button
          type="submit"
          title="Create"
          disabled={false}
          onClick={onClick}
        />
      </div>
    </form>
  );
};

export default CreateForm;
