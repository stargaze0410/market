import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const ProductsList = () => {
  const { getProducts, products } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        mt: 5,
      }}
    >
      {products
        ? products.map((item) => (
            <Grid xs={3.5} mb={7}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <NavLink to={`/details/${item.id}`}>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </NavLink>
                </CardActions>
              </Card>
            </Grid>
          ))
        : null}
    </Box>
  );
};

export default ProductsList;
