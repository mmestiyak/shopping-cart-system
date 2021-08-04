import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  iconButton: {
    width: '4rem',
    height: '4rem',
    background: '#ffd800',
    margin: '.5rem 0',
  },
}));

export default function Header() {
  const cartItems = useSelector((state) => state.shopping.cart);
  const [totalCartItems, setTotalCartItems] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
    });
    setTotalCartItems(total);
  }, [cartItems]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#fff', color: '#555' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/"> Evaly</Link>
          </Typography>
          <Link to="/cart">
            <IconButton
              variant="contained"
              color="inherit"
              className={classes.iconButton}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingCartIcon />
                <span>{totalCartItems}</span>
              </div>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
