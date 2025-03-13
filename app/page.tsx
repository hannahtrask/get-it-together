import { Box, Card } from '@chakra-ui/react'
import { TaskList } from 'tada/components/TaskList'
import { ToDoCalendar } from 'tada/components/Calendar'
import { Navigation } from 'tada/components/Navigation'

export default function Home() {
  return (
    <Card
      style={{
        margin: '2rem 2rem 0 2rem',
      }}
    >
      <Navigation />
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <Box style={{ width: '50%', padding: '0 2rem 2rem 2rem' }}>
          <ToDoCalendar />
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          <TaskList />
          <Card
            style={{
              backgroundImage: 'url(/annie-spratt-YNjqOIYpCaU-unsplash.jpg)',
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
