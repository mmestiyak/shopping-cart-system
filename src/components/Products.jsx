import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';
const Products = () => {
  const products = useSelector((state) => state.shopping.products);
  return (
    <Container style={{ marginTop: '6rem' }} maxWidth="lg">
      <Grid
        container
        spacing={10}
        justifyContent="space-between"
        alignItems="center"
      >
        {products.map((product) => (
          <Grid key={product.key} xs={12} sm={4} item>
            <SingleProduct {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
