import React, { FC } from 'react';
import ImportantIcon from '../Icons/ImportantIcon';
import { useStyles } from './InvalidNotif.styles';
interface InvalidNotif {
  errorMessage: string;
}
const InvalidNotif: FC<InvalidNotif> = ({ errorMessage }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>
        <ImportantIcon fill={'#E63946'} />
      </span>
      <span>{errorMessage}</span>
    </div>
  );
};

export default InvalidNotif;
