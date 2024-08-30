import { Box, Drawer, IconButton, } from "@mui/material";
import { Notes } from "./Notes";
import { DensityMedium } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

export const SideBar = ({ drawerWidth = 240, isVisible = false }) => {

    const dispatch = useDispatch();
    const { isSideBarOpen } = useSelector(state => state.sideBar);
    const onClickSideBar = () => {
        (isSideBarOpen) ? dispatch(closeSideBar()) : dispatch(openSideBar());
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
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <IconButton className='iconClose'
                    sx={{
                        color: 'white',
                    }}
                    onClick={onClickSideBar}
                ><DensityMedium />
                </IconButton>
                <Notes></Notes>
            </Drawer>

        </Box>
    )
}