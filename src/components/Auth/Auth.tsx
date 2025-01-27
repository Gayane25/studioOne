import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';
import { useStyles } from './Auth.styles';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { authenticateUser } from '../../store/Auth/authSlice';

const Auth = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const handleUserNameChange = (value: string) => {
    setUserName(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authenticateUser({ userName, password }));

    navigate('/profile');
  };

  return (
    <div className={classes.root}>
      <form action="" onSubmit={handleLogin}>
        <div className={classes.authContainer}>
          <h3>Sign In to your Web App</h3>
          <Input
            type={'text'}
            placeholder={'Enter your user name'}
            value={userName}
            onInputChange={handleUserNameChange}
          />
          <Input
            type={'password'}
            placeholder={'******'}
            value={password}
            onInputChange={handlePasswordChange}
          />
          <Button
            disabled={false}
            title={'Login'}
            type="submit"
            onClick={() => {}}
          />
          <Link to="/resetPassword" className={classes.link}>
            Forget Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Auth;
