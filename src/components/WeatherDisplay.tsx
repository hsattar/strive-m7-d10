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
    const weatherData = useSelector((state: IReduxStore) => state.weatherInfo.data)

    useEffect(() => {
        dispatch(fetchWeatherAction(coordinates.lat, coordinates.lon))
    }, [coordinates])

    return (
        <Stack sx={{ marginTop: "2rem" }} alignItems="center">
            { !weatherData && <Typography variant='h2'>Choose a City and Country</Typography> }   
            { weatherData && (
                <>
                <Typography variant='h2'>Weather in {city}</Typography>   
                <Typography variant='h2'>{Math.round(weatherData.main.temp)} &#176;C</Typography>   
                <Typography variant='h4'>{weatherData.weather[0].description}</Typography>   
                </>
            )}
        </Stack>
    )
}
