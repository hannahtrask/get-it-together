'use client'

import Calendar from 'react-calendar'
import { Card } from '@chakra-ui/react'
import './calendar.css'

export const ToDoCalendar = () => {
  return (
    <Card
      style={{
        backgroundImage: 'url(/tianying-xu-eNqQJbYcvdg-unsplash.jpg)',
        backgroundSize: 'cover',
        height: '40rem',
        padding: '1rem',
      }}
    >
      <Calendar />
    </Card>
  )
}
