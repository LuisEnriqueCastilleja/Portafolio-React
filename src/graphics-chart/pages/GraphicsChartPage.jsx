import { Box, Grid } from "@mui/material"
import { LineChart } from "../components/LineChart"
import { PieChart } from "../components/PieChart"
import { BarChart } from "../components/BarChart"

export const GraphicsChartPage = () => {
    return (
        <>
            <Grid container justifyContent={'center'} pt={2} rowGap={2} display='grid'>
                <Grid item>
                    <Box sx={{
                        border: 1,
                        borderColor: 'blue',
                        height: 300,
                        width: 500,
                    }} >
                        <LineChart />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{
                        border: 1,
                        borderColor: 'blue',
                        height: 300,
                        width: 500,
                    }} >
                        <BarChart />
                    </Box>
                </Grid>
                <Grid item pb={2}>
                    <Box sx={{
                        border: 1,
                        borderColor: 'blue',
                        height: 300,
                        width: 500,
                    }} >
                        <PieChart />
                    </Box>
                </Grid>

            </Grid>
        </>


    )
}
