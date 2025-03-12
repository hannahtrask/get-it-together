'use client'

import { Card } from '@chakra-ui/react'
import Calendar from 'react-calendar'
import { useState } from 'react'

export const ToDoCalendar = () => {
  const [value, setValue] = useState<Date>(new Date())

  const onChange = (nextValue: Date) => {
    setValue(nextValue)
  }

  return (
    <>
      <Card
        style={{
          backgroundImage: 'url(/wolfgang-hasselmann-RQ6M0GTjpvM-unsplash.jpg)',
          backgroundSize: 'cover',
          height: '40rem',
          padding: '1rem',
        }}
      >
        <Calendar onChange={onChange} value={value as Date} />
      </Card>
    </>
  )
}
