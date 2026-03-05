import { ThemeProvider } from '@emotion/react';
import themes from './themes';
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from './store/hook';
import { toggleTheme } from './store/slices/themeSlice';

import ContrastIcon from '@mui/icons-material/Contrast';
import LightModeIcon from '@mui/icons-material/LightMode';

export function Root() {
  const dispatch = useAppDispatch();

  function handleToggleTheme() {
    dispatch(toggleTheme());
  }

  const currentTheme = useAppSelector((state) =>
    state.theme === 'light' ? themes.light : themes.dark
  );

  const themeMode = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />

      <AppBar position="static" sx={{ marginBottom: '1rem' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            GrowAvalia
          </Typography>

          <IconButton color="inherit" onClick={handleToggleTheme}>
            {themeMode === 'light' ? <ContrastIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container>
        <form>
          <Typography variant="h6" gutterBottom>
            Fazer Login
          </Typography>
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
  );
}
