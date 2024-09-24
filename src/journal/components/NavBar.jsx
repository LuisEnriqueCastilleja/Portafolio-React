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
import "../styles/navBar.css";
import { closeSideBar, openSideBar } from "../slices/SideBarSlice";

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
            }}
            onClick={onClickSideBar}
          >
            <DensityMedium />
          </IconButton>
        ) : (
          <Box></Box>
        )}

        <Grid
          container
          sx={{
            flexWrap: "wrap",
            columnGap: 10,
            width: "100vw",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="div">
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
          </Grid>

          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
          </Grid>

          <Grid
            item
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};
