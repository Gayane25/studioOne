import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      padding: [10, 0],
      '& button': {
        height: 40,
        width: '100%',
        backgroundColor: '#6fb0f9',
        color: '#FFFFFF',
        borderRadius: 8,
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
      },
    },
    cancel: {
      width: '100%',
      padding: [10, 0],
      '& button': {
        backgroundColor: '#FFFFFF',
        height: 40,
        width: '100%',
        color: '#D4D8DD',
        fontSize: 14,
        fontWeight: 600,
        border: '1px solid #D4D8DD',
        cursor: 'pointer',
      },
    },
    create: {
      backgroundColor: '#6fb0f9',
      color: '#FFFFFF',
    },
  },
  { name: 'Button' }
);
