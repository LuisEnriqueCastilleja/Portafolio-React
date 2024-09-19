import { StarOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";

export const NothingSelectedView = ({
  activeNote,
  isActive,
  drawerWidth = 240,
}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return isActive ? (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: 3,
        height: isSideBarOpen ? "95%" : "100%",
        mt: isSideBarOpen ? "20px" : "0px",
        width: isSideBarOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Typography
        sx={{
          fontSize: 60,
          display: "block",
        }}
        color="white"
      >
        {activeNote.title}
      </Typography>
      <Typography
        color="white"
        sx={{
          fontSize: 40,
          display: "block",
        }}
      >
        {activeNote.body}
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          display: "block",
        }}
        color="white"
      >
        {activeNote.date}
      </Typography>
    </Box>
  ) : (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        display: "flex",
        height: "100%",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid item>
        <StarOutlined
          sx={{
            fontSize: 100,
            color: "white",
          }}
        />
      </Grid>
      <Grid item>
        <Typography color="white" variant="h5">
          Selecciona o crea una nota
        </Typography>
      </Grid>
    </Grid>
  );
};
