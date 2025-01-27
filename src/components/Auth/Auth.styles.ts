import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
    },

    authContainer: {
      maxWidth: 300,
      backgroundColor: '#FFFFFF',
      padding: 20,
      textAlign: 'center',
      margin: [200, 'auto'],
      borderRadius: 8,
      '& h3': {
        fontWeight: 700,
        color: '#212529',
        fontSize: 24,
      },
    },

    link: {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  { name: 'Auth' }
);
