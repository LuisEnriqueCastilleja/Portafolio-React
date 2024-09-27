import { Box, Button, Grid } from "@mui/material";
import { LineChart } from "@/graphics-chart/components";
import { PieChart } from "@/graphics-chart/components";
import { BarChart } from "@/graphics-chart/components";
import { useNavigate } from "react-router-dom";

export const GraphicsChartPage = () => {
  const navigate = useNavigate();

  const onHandleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "lightgray",
          pt: 2,
          columnGap: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Box
            sx={{
              border: 1,
              borderColor: "blue",
              height: 300,
              width: 500,
            }}
          >
            <LineChart />
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              border: 1,
              borderColor: "blue",
              height: 300,
              width: 500,
            }}
          >
            <BarChart />
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              border: 1,
              mt: 2,
              mb: 2,
              borderColor: "blue",
              height: 300,
              width: 500,
            }}
          >
            <PieChart />
          </Box>
        </Grid>
        <Button
          variant="outlined"
          sx={{
            height: 50,
            width: 100,
            alignSelf: "center",
          }}
          onClick={onHandleBack}
        >
          Back
        </Button>
      </Grid>
    </>
  );
};
