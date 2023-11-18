import { Heading, Container, SimpleGrid, Flex, Highlight } from '@chakra-ui/react';
import Column from './components/Column/Column';
import { ColumnType } from './utils/enums';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DarkModeIconButton from './components/DarkModeIconButton/DarkModeIconButton';

function App() {

  return (
    <main>
      <Container
        maxWidth="container.xl"
        py={4}
      >
        <Flex
          align="center"
        >
          <Heading
            w="full"
            fontSize={{ base: 'xl', sm: '4xl', md: '5xl' }}
            fontWeight="bold"
            textAlign="center"
            bgGradient="linear(to-t, #5C8984, #A0C49D)"
            bgClip="text"
          >
            <Highlight
              query="usefull"
              styles={{ px: '6', rounded: 'xl', bg: 'green.100', color: '#5C8984' }}
            >
              One more usefull KANBAN Board
            </Highlight>
          </Heading >
          <DarkModeIconButton
            bgColor='transparent'
            _hover={{ bgColor: '#FFD9B7' }}
            fontSize={{ base: 'lg', md: '2xl' }}
            rounded="full"
          />
        </Flex>

      </Container>
      <DndProvider backend={HTML5Backend}>
        <Container
          maxWidth="container.xl"
          px={2}
          py={8}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.HOT_TASKS} />
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_WORK} />
            <Column column={ColumnType.DONE} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;