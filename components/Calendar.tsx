'use client'

import Calendar from 'react-calendar'
import { Card } from '@chakra-ui/react'
import './calendar.css'

interface CalendarProps {
  setDate: Date
  date: Date
  selectRange: boolean
}
export const ToDoCalendar = ({ setDate, date, selectRange }: CalendarProps) => {
  return (
    <Card
      style={{
        backgroundImage: 'url(/tianying-xu-eNqQJbYcvdg-unsplash.jpg)',
        backgroundSize: 'cover',
        height: '40rem',
        padding: '1rem',
      }}
    >
      <Calendar onChange={setDate} value={date} selectRange={selectRange} />
    </Card>
  )
}
