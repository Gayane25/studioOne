import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { useStyles } from './Layout.styles';

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
