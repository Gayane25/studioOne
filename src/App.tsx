import Login from './pages/Login';
import News from './pages/News';

const App = () => {
  const token = localStorage.getItem('authToken');
  return <div>{token ? <News /> : <Login />}</div>;
};

export default App;
