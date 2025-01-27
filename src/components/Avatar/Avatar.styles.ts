import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      width: 45,
      height: 45,
      border: '1px solid #D3D3D3',
      borderRadius: '50%',
      backgroundColor: '#D3D3D3',
      margin: [0, 10],
      cursor: 'pointer',
    },
  },
  { name: 'Avatar' }
);
