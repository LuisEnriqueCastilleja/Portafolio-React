import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../thunks";
import { Box, Button, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PokemonsPage = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, pokemons, page } = useSelector(state => state.pokemon);

    const onHandleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        dispatch(getPokemons());
    }, []);


    return (
        <>
            <Box sx={{
                display: 'flex'
            }}>
                <Typography component='h1'>Pokemon page: </Typography>
                <Button variant="contained"
                    sx={{
                        height: 30,
                        width: 130,
                        ml: 20,
                        alignSelf: 'center',
                        backgroundColor: 'lightgreen',
                        color: 'black',
                        ":hover": {
                            boxShadow: 'initial',
                            color: 'black',
                            backgroundColor: 'yellow'
                        }
                    }} onClick={onHandleBack}>Back</Button>
            </Box>

            <Divider />
            <Typography component='span'>
                Loading: {!isLoading ? 'True' : 'False'}
            </Typography>

            <TableContainer xs={12}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pokemons.map((pokemon) => {
                            return (
                                <TableRow key={pokemon.name}>
                                    <TableCell>{pokemon.name}</TableCell>
                                    <TableCell> 1 </TableCell>
                                </TableRow>
                            )
                        })
                        }
                    </TableBody>
                </Table>

            </TableContainer>
            <button disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}>
                Next
            </button>
        </>
    )
}
