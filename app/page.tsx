import { Box, Card, Heading } from '@chakra-ui/react'
import { TaskList } from 'tada/components/TaskList'
import { ToDoCalendar } from 'tada/components/Calendar'

export default function Home() {
  return (
    <Card
      style={{
        margin: '2rem 2rem 0 2rem',
      }}
    >
      <Heading as="h2" style={{ padding: '2rem 2rem 1rem 2rem' }}>
        get it together, han
      </Heading>
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <Box style={{ width: '50%', padding: '0 2rem 2rem 2rem' }}>
          <ToDoCalendar />
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          <TaskList />
          <Card
            style={{
              backgroundImage:
                'url(/wolfgang-hasselmann-XK4BU0ggzhk-unsplash.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom center',
              margin: '1rem',
              height: '28rem',
              width: '33rem',
            }}
          ></Card>
        </Box>
      </Box>
    </Card>
  )
}
