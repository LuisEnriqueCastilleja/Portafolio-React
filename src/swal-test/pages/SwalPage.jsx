import { Box, Button, Grid, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const SwalPage = () => {

    const navigate = useNavigate();


    const handleClick = () => {

        Swal.fire({
            title: 'Example',
            text: 'Hello World',
            didOpen: () => {
                // run when swal is opened...
            },
            didClose: () => {
                // run when swal is closed...
            }
        }).then(result => {
            // when confirmed and promise resolved...
        }).catch(error => {
            // when promise rejected...
        });
    }

    function handleClickSwalDesigned() {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
            // position: "top-end",
            // icon: "success",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    const onHandleBack = () => {
        navigate(-1);
    }

    return (
        <Grid sx={{
            display: 'grid',
            backgroundColor: 'lightgray',
            height: '100vh'
        }}>
            <Box sx={{ display: 'grid' }}>
                <Button sx={{
                    alignSelf: 'start',
                    justifySelf: 'end'
                }} variant="contained" onClick={handleClick}>
                    Alert
                </Button>

                <Button variant="contained"
                    sx={{
                        height: 50,
                        width: 130,
                        alignSelf: 'center',
                        justifySelf: 'end',
                        backgroundColor: 'darkmagenta',
                        mr: 1,
                        color: 'white',
                        ":hover": {
                            boxShadow: 'initial',
                            color: 'black',
                            backgroundColor: 'yellow'
                        }
                    }} onClick={onHandleBack}>Back</Button>

                <Button sx={{
                    justifySelf: 'end',
                    alignSelf: 'end',
                }} variant="contained" onClick={handleClickSwalDesigned}>
                    Alert Designed
                </Button>
            </Box>

        </Grid>
    );
}
