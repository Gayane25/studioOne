import { FC } from 'react';
import { useStyles } from './Avatar.styles';
interface AvatarProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
const Avatar: FC<AvatarProps> = ({ onClick }) => {
  const classes = useStyles();
  return <span className={classes.root} onClick={onClick}></span>;
};

export default Avatar;
