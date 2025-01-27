import { useNavigate } from 'react-router-dom';
import { useStyles } from './pages.styles';

const Home = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.homePageRoot}>
      <span>For seeing the fresher news please</span>{' '}
      <span style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>
        Sign In
      </span>
    </div>
  );
};

export default Home;
