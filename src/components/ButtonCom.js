import { Box,Button,Link } from "@mui/material";
import React from "react";

function ButtonCom() {
  return (
    <Box
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link href="/" underline="none">
        <Button variant="contained">Page 1</Button>
      </Link>
      <Link href="/galary" underline="none">
        <Button variant="contained">Page 2</Button>
      </Link>
    </Box>
  );
}

export default ButtonCom;
