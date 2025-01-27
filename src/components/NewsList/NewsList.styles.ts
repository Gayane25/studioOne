import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  { name: 'NewsList' }
);
