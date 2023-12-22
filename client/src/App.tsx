import { useMemo } from 'react'
import './App.css'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from './theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './scenes/Navbar';
import Home from './pages/Home';

function App() {
  const theme = useMemo(() => createTheme(themeSettings),[]);


  return (
    <>
      <div className='app'>
        <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box width="100%" height="100%" padding="1rem 2rem 4rem">
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<div> SignIn </div>}/>
            <Route path="/signUp" element={<div> Sign UP </div>}/>
          </Routes>
        </Box>

      </ThemeProvider>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
