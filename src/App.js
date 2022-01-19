
// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import About from './About'

import Home from './Home'

import Navbar from './Navbar'
import Service from './Service'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  black: '#000',
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const config  = {

  initialColorMode: 'light',
  useSystemColorMode: false,
} 

const theme = extendTheme({ config })


// 3. Pass the `theme` prop to the `ChakraProvider`
function App() {
  return (
    <ChakraProvider theme={theme}  >
      <div className="app"  >

    <Navbar/>
    <Home/>
     <About/>
     <Service/>
      </div>
    </ChakraProvider>
  )
}

export default App;
