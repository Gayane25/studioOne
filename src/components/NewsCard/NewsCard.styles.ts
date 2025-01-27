import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      border: '1px solid #D3D3D3',
      outline: 'none',
      position: 'relative',
      width: 'fit-content',
      minWidth: 700,
      maxWidth: 720,
      margin: '0.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      transition: 'transform 0.3s, box-shadow 0.3s',
      textAlign: 'center',

      '&:hover': {
        opacity: 0.6,
        cursor: 'pointer',
      },
    },
    imgContent: {
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
    deleteIcon: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 5,
    },
    fibo: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      color: 'orange',
    },
    titleContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 50,
    },
    infoContent: {
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 5,
      '& ul': {
        display: 'flex',
        gap: '1.6rem',
      },
    },
    title: {
      fontWeight: 700,
      fontSize: 16,
    },

    flex: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
    },
    greyText: {
      fontWeight: 400,
      fontSize: '0.875rem',
      color: '#929292',
    },
  },
  { name: 'NewsCard' }
);
