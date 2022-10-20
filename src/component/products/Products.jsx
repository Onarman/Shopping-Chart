import { Container,Grid} from '@mui/material'
import React from 'react'
import Categories from '../categories/Categories'
import ProductCard from "./ProductCard";
const Products = ({products}) => {
  return (
    <div>
        
        <Container >
            <Categories  />
            <Grid container justifyContent="center" spacing={4} sx={{mt:1}}>

               { products?.map((product) => (
            
                    <Grid item >
                   <ProductCard product={product} />
                </Grid>
                ))
               }
            </Grid>
        </Container>
    </div>
  )
}

export default Products