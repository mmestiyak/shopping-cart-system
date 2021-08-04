import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import SingleProduct from './SingleProduct';
import * as actions from '../redux/actions/shoppingActions';

const Products = () => {
  const products = useSelector((state) => state.shopping.products);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const response = await data.json();
      // console.log(response);
      actions.setProducts(response.slice(0, 12))(dispatch);
      // console.log(products);
    })();
  }, []);
  return (
    <Container style={{ marginTop: '6rem' }} maxWidth="lg">
      {products.length ? (
        <Grid
          container
          spacing={10}
          justifyContent="space-between"
          alignItems="center"
        >
          {products.map((product) => (
            <Grid key={product.id} xs={12} sm={4} item>
              <SingleProduct {...product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div
          style={{
            display: 'flex',
            minHeight: '80vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            component="p"
            variant="h3"
            style={{ textAlign: 'center' }}
            color="secondary"
          >
            Loading...
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default Products;
