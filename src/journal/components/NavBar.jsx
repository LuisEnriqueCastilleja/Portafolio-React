import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  DensityMedium,
  LogoutOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "@/journal/styles/navBar.css";
import { closeSideBar, openSideBar } from "@/journal/slices/SideBarSlice";

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const { isSideBarOpen } = useSelector((state) => state.sideBar);

  const onLogout = () => {
    dispatch(startLogout());
  };

  const onClickSideBar = () => {
    isSideBarOpen ? dispatch(closeSideBar()) : dispatch(openSideBar());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isSideBarOpen
          ? { sm: `calc(100% - ${drawerWidth}px)` }
          : { sm: "100%" },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        {!isSideBarOpen ? (
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
        ) : (
          <Box></Box>
        )}

        <Box
          className="nav-box"
          sx={{
            display: "flex",
            width: "100vw",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              paddingLeft: "10px",
            }}
          >
            <Link className="link" to="/signalr/">
              ChatSignalR
            </Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link className="link" to="/gifs/">
              Gifs
            </Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link className="link" to="/pokemons/">
              Pokemons
            </Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link className="link" to="/graphics/">
              Graphics ChartJS
            </Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link className="link" to="/toast/">
              Toast
            </Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link className="link" to="/swal/">
              Swal
            </Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link className="link" to="/roadmap/">
              RoadMap-Designs
            </Link>
          </Typography>

          <IconButton
            color="error"
            sx={{
              marginLeft: "auto",
            }}
            onClick={onLogout}
          >
            <LogoutOutlined />
          </IconButton>
        </Box>
      </Grid>
    </AppBar>
  );
};
