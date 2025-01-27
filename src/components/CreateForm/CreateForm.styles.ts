import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      minWidth: 474,
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      '& h2': {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 20,
        color: '#212529',
      },
    },
    buttonGroup: {
      display: 'flex',
      gap: 10,
    },
  },
  { name: 'CreateForm' }
);
