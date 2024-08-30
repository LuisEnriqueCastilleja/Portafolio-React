import { StarOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = ({ activeNote, isActive, isSideBarOpen }) => {

    return (
        (isActive) ?
            <Grid container
                spacing={0}
                direction="column"
                justifyContent="center"
                sx={{
                    backgroundColor: 'primary.main',
                    borderRadius: 3
                }}>
                <Grid item>
                    <Typography sx={{
                        fontSize: 80,
                        display: 'block',
                    }} color='white'
                    >{activeNote.title}</Typography>
                    <Typography color='white'
                        sx={{
                            fontSize: 60,
                            display: 'block',
                        }}>{activeNote.body}</Typography>
                    <Typography
                        sx={{
                            fontSize: 30,
                            display: 'block',
                        }}
                        color='white'>{activeNote.date}</Typography>
                </Grid>

            </Grid>
            :
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    display: 'flex',
                    height: '100%',
                    backgroundColor: 'primary.main',
                    borderRadius: 3
                }}>
                <Grid item>
                    <StarOutlined sx={{
                        fontSize: 100, color: 'white'
                    }} />
                </Grid>
                <Grid item>
                    <Typography color="white"
                        variant="h5">Selecciona o crea una nota</Typography>
                </Grid>
            </Grid>
    )
}
