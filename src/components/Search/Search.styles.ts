import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      maxHeight: 36,
      minWidth: 300,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',

      '& input': {
        width: '100%',
        minHeight: 36,
        border: 'none',
        paddingLeft: 5,
        outline: 'none',
        '&::placeholder': {
          padding: [0, 5],
          fontFamily: 'Nunito',
          fontSize: 12,
          fontWeight: 400,
          color: '#6C757D',
        },
      },
    },
  },
  { name: 'Search' }
);
