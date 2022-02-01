import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonCom from "./ButtonCom";
import CardMedia from "@mui/material/CardMedia";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Img =
  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
export default function Galary() {
  const [state, setState] = useState([]);
  const fetchProductsWithApi = async () => {
    const rawAPI = await fetch("https://fakestoreapi.com/products");
    const API = await rawAPI.json();
    // sending API data to redux state
    setState(API);
  };
  useEffect(() => {
    fetchProductsWithApi();
  }, []);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {state.map((item) => (
            <Grid item xs={1} md={3}>
              <Item>
                <CardMedia
                  component="img"
                  height="200"
                  width="100"
                  image={item.image}
                  alt="green iguana"
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <ButtonCom />
    </>
  );
}
