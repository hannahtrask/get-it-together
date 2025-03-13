'use client'

import { Card } from '@chakra-ui/react'
import Calendar from 'react-calendar'
import { SetStateAction, useState } from 'react'

export const ToDoCalendar = () => {
  const [value, setValue] = useState<Date>(new Date())

  const onChange = (nextValue: SetStateAction<Date>) => {
    setValue(nextValue)
  }

  return (
    <>
      <Card
        style={{
          backgroundImage: 'url(/tianying-xu-eNqQJbYcvdg-unsplash.jpg)',
          backgroundSize: 'cover',
          height: '40rem',
          padding: '1rem',
        }}
      >
        <Calendar onChange={onChange as () => void} value={value as Date} />
      </Card>
    </>
  )
}
