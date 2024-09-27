import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { Notes } from "@/journal/components/";
import { DensityMedium } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar, openSideBar } from "@/journal/slices/SideBarSlice";

export const SideBar = ({ drawerWidth = 240, isVisible = false }) => {
  const dispatch = useDispatch();
  const { isSideBarOpen } = useSelector((state) => state.sideBar);
  const onClickSideBar = () => {
    isSideBarOpen ? dispatch(closeSideBar()) : dispatch(openSideBar());
  };

  return (
    <Box
      sx={{
        width: { sm: drawerWidth },
        backgroundColor: "lightgray",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: "flex",
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "primary.main",
          }}
        >
          <IconButton
            className="iconClose"
            sx={{
              color: "white",
              "&:active": {
                outline: "none",
                boxShadow: "none",
              },
            }}
            onClick={onClickSideBar}
          >
            <DensityMedium />
          </IconButton>
          <Typography
            component="h3"
            sx={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              justifyContent: "center",
              mt: "3px",
            }}
          >
            Notas Pendientes
          </Typography>
        </Box>
        <Notes></Notes>
      </Drawer>
    </Box>
  );
};
