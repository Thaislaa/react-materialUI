import { ThemeProvider } from "@emotion/react"
import themes from "./themes";
import { AppBar, Button, Container, CssBaseline, Grid, TextField, Toolbar, Typography } from "@mui/material";
import ContrastIcon from '@mui/icons-material/Contrast';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDark ? themes.dark : themes.light}>
        <CssBaseline />
        <AppBar position="relative" sx={{ marginBottom: "1rem" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>GrowAvalia</Typography>
            <Button color="inherit" variant="outlined" startIcon={isDark ? <LightModeIcon /> : <ContrastIcon />} onClick={() => setIsDark(!isDark)}>
              Alterar Tema
            </Button>
          </Toolbar>
        </AppBar>

        <Container>
          <form>
            <Typography variant="h6" gutterBottom>Fazer Login</Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <TextField fullWidth label="E-mail"></TextField>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField fullWidth label="Senha"></TextField>
              </Grid>

              <Grid>
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
