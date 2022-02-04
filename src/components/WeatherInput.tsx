import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import { CountryCodes } from '../data/CountryCodes'

const countryCodes = CountryCodes.map(country => country.name)

export default function WeatherInput() {
    return (
        <Stack direction="row" spacing={2} sx={{ marginTop: "1rem" }}>
            <TextField label="City" variant="standard" color="info" />
            <Autocomplete
                sx={{ width: 200 }}
                options={countryCodes}
                disableCloseOnSelect
                renderInput={(params) => (
                <TextField {...params} label="Country" variant="standard" />
                )}
            />
        </Stack>
    )
}