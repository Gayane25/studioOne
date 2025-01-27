import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      paddingRight: 50,
      paddingLeft: 100,
      display: 'flex',
      minWidth: '100%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      minHeight: '70px',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'flex-end',
      zIndex: 100,
      backgroundColor: '#eff2f5',
      top: 0,

      position: 'sticky',
    },
    flex: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      width: '100%',

      justifyContent: 'flex-end',
      '& ul': {
        display: 'flex',
        listStyle: 'none',
        gap: 20,
        '& li': {
          cursor: 'pointer',
          '&:active': {
            textDecoration: 'underline',
          },
        },
      },

      '& span': {
        cursor: 'pointer',
      },
    },
  },
  { name: 'Header' }
);
