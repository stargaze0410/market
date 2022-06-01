import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter";

const ProductsList = () => {
  const { getProducts, products } = useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();
  // Хук useSearchParams предназначен для чтения и изменения строки запроса в URL для текущего маршрута. По аналогии с хуком useState возвращает значение и функцию для изменения этого значения.
  //   https://tokmakov.msk.ru/blog/item/678#:~:text=useSearchParams,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8E%20%D0%B4%D0%BB%D1%8F%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%8D%D1%82%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.

  // console.log(...searchParams);

  const [type, setType] = useState(searchParams.get("type") || "all");

  const paramsWithType = () => {
    console.log("params With Type");
    return {
      type: type,
      q: searchParams.get("q"),
    };
  };

  const paramsNoType = () => {
    console.log("params No Type");
    return {
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);

  return (
    <>
      <Filter type={type} setType={setType} />
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
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
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
    </>
  );
};

export default ProductsList;
