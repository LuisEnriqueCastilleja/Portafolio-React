import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastPage = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: "top-center",
    });

    toast.error("Error Notification !", {
      position: "top-left",
    });

    toast.warn("Warning Notification !", {
      position: "bottom-left",
    });

    toast.info("Info Notification !", {
      position: "bottom-center",
    });

    toast("Custom Style Notification with css class!", {
      position: "bottom-right",
      className: "foo-bar",
    });
  };

  const onHandleBack = () => {
    navigate(-1);
  };

  return (
    <Grid
      direction="column"
      container
      sx={{
        justifyContent: "center",
        backgroundColor: "lightgray",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={handleClickButton}
          sx={{
            backgroundColor: "lightsalmon",
            height: 50,
            width: 130,
            display: "block",
            color: "black",
            ":hover": {
              boxShadow: "initial",
              color: "white",
              backgroundColor: "darkblue",
            },
          }}
        >
          Show Toast
        </Button>

        <Button
          variant="contained"
          sx={{
            height: 50,
            width: 130,
            alignSelf: "center",
            backgroundColor: "lightgreen",
            color: "black",
            ":hover": {
              boxShadow: "initial",
              color: "black",
              backgroundColor: "yellow",
            },
          }}
          onClick={onHandleBack}
        >
          Back
        </Button>
      </Box>
      <ToastContainer />
    </Grid>
  );
};
