import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      backgroundColor: ' #F8F9FA',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
    },
    container: {
      paddingTop: 30,
      overflowY: 'auto',
    },
  },
  { name: 'Layout' }
);
