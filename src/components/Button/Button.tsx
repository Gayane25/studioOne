import React, { FC } from 'react';
import { useStyles } from './Button.styles';

interface IButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  type?: 'cancel' | 'submit';
}
const Button: FC<IButtonProps> = ({
  onClick,
  disabled,
  title,
  type = 'submit',
}) => {
  const classes = useStyles();
  return (
    <div className={type === 'submit' ? classes.root : classes.cancel}>
      <button onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </div>
  );
};

export default Button;
