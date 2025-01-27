import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      margin: [10, 0],
      '& input': {
        width: '100%',
        height: 40,
        border: 'none',
        borderRadius: 8,
        outline: 'none',
        paddingLeft: 16,
        fontFamily: 'Nunito',
        fontSize: 14,
        fontWeight: 400,
        backgroundColor: '#e6eef7',
      },
      '& ::placeholder': {
        color: '#D4D8DD',
      },
    },

    labelStyle: {
      color: '#212529',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: '17.73px',
    },
    labelFont: {
      fontSize: 13,
      fontWeight: 600,
      color: '#212529',
    },
  },
  { name: 'Input' }
);
