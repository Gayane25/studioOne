import { useStyles } from './pages.styles';
import { decodeBase64Token } from '../services/authService';
import background from '../assets/background.jpg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const classes = useStyles();
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setUser(decodeBase64Token(token).userName);
    } else {
      navigate('/login');
    }
  }, []);

  console.log(user, 'user');

  const firstLetter = user ? user.charAt(0).toUpperCase() : '?';
  return (
    <div className={classes.profileContainer}>
      <div>
        <img
          src={background}
          loading="lazy"
          alt={'background picture from spirited away film'}
        />
      </div>
      <div className={classes.profilePic}>
        <span className={classes.firstLetter}>{firstLetter}</span>
        <span>{user}</span>
      </div>
    </div>
  );
};

export default Profile;
