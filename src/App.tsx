import { Container, Stack } from "@mui/material";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherInput from "./components/WeatherInput";

export default function App() {
  return (
    <Container maxWidth="xl">
      <Stack justifyContent="center" alignItems="center" sx={{ marginTop: "5rem"}}>
        <WeatherDisplay />
        <WeatherInput />
      </Stack>
    </Container>
  )
}