import { Container, Stack } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/system"
import WeatherDisplay from "./components/WeatherDisplay"
import WeatherInput from "./components/WeatherInput"

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function App() {
  return (
    <Container maxWidth="xl">
      <Stack justifyContent="center" alignItems="center" sx={{ marginTop: "5rem"}}>
        <WeatherInput />
        <WeatherDisplay />
      </Stack>
    </Container>
  )
}