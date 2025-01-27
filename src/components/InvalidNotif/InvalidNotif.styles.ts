import { LineWeight } from '@mui/icons-material';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      height: 40,
      maxWidth: 390,
      color: '#E63946',
      backgroundColor: '#E639461A',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      gap: 5,
      padding: 3,
      fontSize: 14,
      fontWeight: 600,
      borderRadius: 8,
    },
  },
  { name: 'InvalidNotif' }
);
