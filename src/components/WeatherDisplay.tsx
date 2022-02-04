import { Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { IReduxStore } from '../types/ReduxStore'

export default function WeatherDisplay() {

    const city = useSelector((state:IReduxStore) => state.inputs.city)

    return (
        <Stack sx={{ marginTop: "2rem" }} alignItems="center">
            <Typography variant='h2'>Weather in {city}</Typography>   
            <Typography variant='h2'>5 	&#176;C</Typography>   
        </Stack>
    )
}
