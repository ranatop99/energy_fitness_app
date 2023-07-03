import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontSize="26px" fontWeight="600">
        Energy Fitness
      </Typography>
      <Typography>
        Power Up, Ignite <br />& Thrive
      </Typography>
      <Typography>Check out the most Effective exercises</Typography>
    </Box>
  );
};

export default HeroBanner;
