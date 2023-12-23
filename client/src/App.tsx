import { useMemo } from 'react'
import './App.css'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from './theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './scenes/Navbar';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box width="100%" height="100%" padding="1rem 2rem 4rem">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<SignIn />} />
                  <Route path="/signUp" element={<SignUp />} />
                </Routes>
              </Box>
            </ThemeProvider>
          </LocalizationProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
