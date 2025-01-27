import { useStyles } from './Header.styles';
import { Search } from '../Search';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { logout } from '../../store/Auth/authSlice';

interface headerLink {
  displayName: string;
  id: string;
}

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem('authToken');

  const links: headerLink[] = [
    {
      displayName: 'News',
      id: 'news',
    },
    {
      displayName: 'Profile',
      id: 'profile',
    },
  ];

  const navigate = useNavigate();
  const classes = useStyles();

  const logoutFrom = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={classes.root}>
      <Search />
      <div className={classes.flex}>
        <ul>
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => {
                navigate(`/${link.id}`);
              }}
            >
              {link.displayName}
            </li>
          ))}
        </ul>

        {token ? (
          <span onClick={logoutFrom}>Sign Out</span>
        ) : (
          <span onClick={() => navigate('/login')}>Sign In </span>
        )}
      </div>
    </div>
  );
};

export default Header;
