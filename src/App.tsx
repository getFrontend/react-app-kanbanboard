// import { useState } from 'react';
import { Heading } from '@chakra-ui/react';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-r, #7928CA, #FF0080)"
        bgClip="text"
        mt={4}
      >
        Just one more usefull Kanban Board
      </Heading >
    </>
  );
}

export default App;
