// import { useState } from 'react';
import { Heading, Container, SimpleGrid } from '@chakra-ui/react';

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
      <Container
        maxWidth="container.lg"
        px={4}
        py={10}
      >
        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          spacing={{ base: 16, m: 4 }}
        >

        </SimpleGrid>
      </Container>
    </>
  );
}

export default App;
