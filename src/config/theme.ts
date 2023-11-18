import { extendTheme } from '@chakra-ui/react';
import './../index.css'

const theme = extendTheme({
  fonts: {
    heading: `'Nunito Sans', sans-serif`,
    body: `'Roboto Condensed', sans-serif`
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'dark.800' : '#FAF3F0'
      }
    })
  }
});

export default theme;