import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import { CountryCodes } from '../data/CountryCodes'
import { Button } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCityAndCountryAction } from '../redux/actions'

const countryCodes = CountryCodes.map(country => country.name)

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue[50]),
    backgroundColor: lightBlue[50],
    '&:hover': {
      backgroundColor: lightBlue[100],
    },
  }))

const LightInput = styled(TextField)(({ theme }) => ({
    color: theme.palette.getContrastText(lightBlue[50]),
    backgroundColor: lightBlue[50],
}))

export default function WeatherInput() {

    const [city, setCity] = useState('')
    const [country, setCountry] = useState<string | null>('')
    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent) => {
        if (!city || !country) return
        dispatch(updateCityAndCountryAction(city, country))
    }

    return (
        <Stack direction="row" spacing={2}>
            <LightInput placeholder="City" variant="outlined" value={city} onChange={e => setCity(e.target.value)} />
            <Autocomplete
                sx={{ width: 200 }}
                options={countryCodes}
                disableCloseOnSelect
                value={country} 
                onChange={(e, value) => setCountry(value)}
                renderInput={(params) => (
                <LightInput {...params} placeholder="Country" variant="outlined" />
                )}
            />
            <ColorButton variant="outlined" onClick={handleSubmit}>Check Weather</ColorButton>
        </Stack>
    )
}