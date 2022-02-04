import { Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IReduxStore } from '../types/ReduxStore'
import { useDispatch } from 'react-redux'
import { fetchWeatherAction } from '../redux/actions'

export default function WeatherDisplay() {

    const dispatch = useDispatch()
    const city = useSelector((state:IReduxStore) => state.inputs.city)
    const coordinates = useSelector((state: IReduxStore) => state.weatherInfo.coordinates)

    useEffect(() => {
        dispatch(fetchWeatherAction(coordinates.lat, coordinates.lon))
    }, [coordinates])

    return (
        <Stack sx={{ marginTop: "2rem" }} alignItems="center">
            <Typography variant='h2'>Weather in {city}</Typography>   
            <Typography variant='h2'>5 	&#176;C</Typography>   
        </Stack>
    )
}
