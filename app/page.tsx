import { Box, Card, Image } from '@chakra-ui/react'
import { Calendar } from 'tada/components/Calendar'

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
          <Card
            style={{
              border: '1px solid black',
              margin: '1rem',
              height: '10rem',
              width: '10rem',
            }}
          ></Card>
          {/* todo make this a picture for now */}
          <Card
            style={{
              border: '1px solid black',
              margin: '1rem',
              height: '10rem',
              width: '10rem',
            }}
          ></Card>
        </Box>
      </Box>
    </Card>
  )
}
