import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../thunks";
import { Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export const PokemonsPage = () => {


    const dispatch = useDispatch();
    const { isLoading, pokemons, page } = useSelector(state => state.pokemon);



    useEffect(() => {
        dispatch(getPokemons());
    }, []);


    return (
        <>
            <Typography component='h1'>Pokemon page</Typography>
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
