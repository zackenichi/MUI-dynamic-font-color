import {
  Button,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const defaultStyles = {
  color: '#000000',
  h1Size: 40,
  bodySize: 18,
};

function App() {
  const [fontColor, setFontColor] = useState(defaultStyles.color);
  const [fontSize, setFontSize] = useState(0); // change in fontSize

  const theme = createTheme({
    typography: {
      h1: {
        color: fontColor,
        textAlign: 'center',
        fontSize: `${defaultStyles.h1Size + fontSize}px`,
        fontWeight: 'bold',
      },
      body1: {
        color: fontColor,
        textAlign: 'center',
        fontSize: `${defaultStyles.bodySize + fontSize}px`,
      },
    },
  });

  const handleFontColorChange = (event) => {
    if (event.target && event.target.value) {
      setFontColor(event.target.value);
    }
  };

  const handleIncreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const handleDecreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  const handleReset = () => {
    setFontColor(defaultStyles.color);
    setFontSize(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: '100px' }}>
        <Grid container spacing={2} alignContent="center">
          <Grid item xs={12}>
            <Typography variant="h1">Hello, World!</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Change the settings below to update font styles
            </Typography>
          </Grid>
          <Grid item xs={12} marginTop="100px">
            <Grid
              container
              justifyContent="center"
              alignContent="center"
              spacing={2}
            >
              <Grid item>
                <input
                  type="color"
                  value={fontColor}
                  onChange={handleFontColorChange}
                  style={{ cursor: 'pointer' }}
                />
              </Grid>
              <Grid item>
                <AddIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={handleIncreaseFontSize}
                />
              </Grid>
              <Grid item>
                <RemoveIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={handleDecreaseFontSize}
                />
              </Grid>
              <Grid item>
                <Button onClick={handleReset}>Reset</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
