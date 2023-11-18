import { extendTheme } from '@chakra-ui/react';
import './../index.css'

const theme = extendTheme({
  fonts: {
    heading: `'Nunito Sans', sans-serif`,
    body: `'Roboto', sans-serif`
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'dark.800' : '#EEE3CB'
      }
    })
  }
});

export default theme;