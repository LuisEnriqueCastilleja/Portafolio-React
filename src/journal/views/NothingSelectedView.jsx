import { StarOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const NothingSelectedView = ({
  activeNote,
  isActive,
  drawerWidth = 240,
}) => {
  const { isSideBarOpen } = useSelector((state) => state.sideBar);

  return isActive ? (
    <Box
      sx={{
        height: "100%",
        padding: "5px",
        backgroundColor: "primary.main",
        borderRadius: 3,
        width: isSideBarOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: isSideBarOpen ? `${drawerWidth}px` : 0,
      }}
    >
      <Typography
        sx={{
          fontSize: 40,
          display: "block",
        }}
        color="white"
      >
        {activeNote.title}
      </Typography>
      <Typography
        color="white"
        sx={{
          fontSize: 20,
          display: "block",
        }}
      >
        {activeNote.body}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          display: "block",
        }}
        color="white"
      >
        {activeNote.date}
      </Typography>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        borderRadius: 3,
        width: isSideBarOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: isSideBarOpen ? `${drawerWidth}px` : 0,
      }}
    >
      <StarOutlined
        className="star-icon"
        sx={{
          fontSize: 100,
          color: "white",
        }}
      />
      <Typography
        color="white"
        variant="h5"
        sx={{
          marginLeft: "20px",
        }}
      >
        Selecciona o crea una nota
      </Typography>
    </Box>
  );
};
