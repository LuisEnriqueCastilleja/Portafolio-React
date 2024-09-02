import { Box, Drawer, IconButton, Typography, } from "@mui/material";
import { Notes } from "./Notes";
import { DensityMedium } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar, openSideBar } from "../slices/SideBarSlice";

export const SideBar = ({ drawerWidth = 240, isVisible = false }) => {

    const dispatch = useDispatch();
    const { isSideBarOpen } = useSelector(state => state.sideBar);
    const onClickSideBar = () => {
        console.log(isSideBarOpen, 'Side bar 1');

        (isSideBarOpen) ? dispatch(closeSideBar()) : dispatch(openSideBar());
        console.log(isSideBarOpen, 'Side bar 2');

    }



    return (
        <Box
            sx={{
                width: { sm: drawerWidth },
                backgroundColor: 'lightgray',
            }}
        >
            <Drawer
                variant='permanent'
                sx={{
                    display: 'flex',
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Box>
                    <Box sx={{
                        display: 'flex',
                        backgroundColor: 'lightgray',
                        alignItems: 'center',
                    }}>

                        <IconButton className='iconClose'
                            sx={{
                                color: 'black',
                            }}
                            onClick={onClickSideBar}
                        ><DensityMedium />
                        </IconButton>
                        <Typography component='h3' sx={{
                            textAlign: 'center',
                            color: 'black',
                            justifyContent: 'center',
                            mt: '3px'
                        }}>Notas Pendientes Luis Castilleja</Typography>
                    </Box>
                    <Notes></Notes>
                </Box>
            </Drawer>
        </Box>
    )
}