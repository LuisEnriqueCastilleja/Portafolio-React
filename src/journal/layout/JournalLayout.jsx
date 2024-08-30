import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"
import { useSelector } from "react-redux";

export const JournalLayout = ({ children }) => {

    const { isSideBarOpen } = useSelector(state => state.sideBar);

    return (
        <Box sx={{ display: 'grid', flexDirection: 'column', height: '100vh', gridTemplateRows: '10% 90%' }}>
            <NavBar />
            {isSideBarOpen ? <SideBar /> : <Box></Box>}

            <Box sx={{
                margin: '10px'
            }}>
                {children}
            </Box>
        </Box>
    )
}
