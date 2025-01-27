import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      background: '#fff',
      padding: '2rem',
      borderRadius: '5px',
      position: 'relative',
      maxWidth: 'fit-content',
      width: '100%',
    },
    closeButton: {
      position: 'absolute',
      top: 4,
      right: 0,
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  },
  { name: 'Modal' }
);
