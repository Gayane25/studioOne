import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      textAlign: 'left',
      margin: [5, 0],
      '& textarea': {
        width: '100%',
        height: 68,
        border: '1px solid #D4D8DD',
        borderRadius: 8,
        outline: 'none',
        padding: [16, 10],
        fontFamily: 'Nunito',
        fontSize: 14,
        fontWeight: 400,
        backgroundColor: '#e6eef7',
      },
      '& ::placeholder': {
        color: '#D4D8DD',
      },
    },

    flex: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: 13,
      fontWeight: 600,
      color: '#212529',
      display: 'flex',
      gap: 5,
    },
  },
  { name: 'TextInput' }
);
