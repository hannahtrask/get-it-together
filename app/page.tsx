import { Box, Card, Image } from '@chakra-ui/react'
import { Calendar } from 'tada/components/Calendar'
import { TaskList } from 'tada/components/TaskList'

export default function Home() {
  return (
    <Card
      style={{
        margin: '2rem 2rem 0 2rem',
      }}
    >
      <Image
        src="/d.png"
        alt="ducks planner"
        style={{ height: '125px', width: '150px' }}
      />
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <Box style={{ width: '50%', padding: '0 2rem 2rem 2rem' }}>
          <Calendar />
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          {/* todo make this into the task list */}
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
