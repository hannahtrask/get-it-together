'use client'

import {
  Button,
  Card,
  Checkbox,
  IconButton,
  Input,
  List,
  ListItem,
  VStack,
  Box,
  Divider,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'

interface Todo {
  id: string
  text: string
  completed: boolean
}

export const TaskList = () => {
  const [toDos, setToDos] = useState<Todo[]>([])
  const [newToDo, setNewTodo] = useState<string>('')

  // todo integrate a real db with this
  // todo integrate react-hook-form
  useEffect(() => {
    const savedTodos = localStorage.getItem('_todos')
    if (savedTodos) {
      setToDos(JSON.parse(savedTodos) as Todo[])
    }
  }, [])

  const addTodo = (): void => {
    if (newToDo.trim() !== '') {
      const updatedTodos = [
        ...toDos,
        { id: uuidv4(), text: newToDo, completed: false },
      ]
      setToDos(updatedTodos)
      setNewTodo('')
      localStorage.setItem('_todos', JSON.stringify(updatedTodos))
    }
  }

  const deleteToDo = (id: string): void => {
    setToDos((prevToDos) => {
      const updatedTodos = prevToDos.filter((toDo) => toDo.id !== id)
      localStorage.setItem('_todos', JSON.stringify(updatedTodos))
      return updatedTodos
    })
  }

  const toggleToDo = (id: string): void => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo,
      ),
    )
  }

  return (
    <Card p={4} borderRadius="md" boxShadow="lg">
      <VStack spacing={4} align="stretch">
        <List spacing={2}>
          {toDos.map((toDo) => (
            <>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <ListItem
                  key={toDo.id}
                  display="flex"
                  alignItems="center"
                  style={{
                    textDecoration: toDo.completed ? 'line-through' : 'none',
                  }}
                >
                  <Checkbox
                    onChange={() => toggleToDo(toDo.id)}
                    isChecked={toDo.completed}
                    mr={2}
                  />
                  {toDo.text}
                </ListItem>
                <IconButton
                  onClick={() => deleteToDo(toDo.id)}
                  aria-label="Delete To Do"
                >
                  <MdDeleteOutline />
                </IconButton>
              </Box>
              <Divider />
            </>
          ))}
        </List>
        <Input
          placeholder="Add something to your todo list!"
          value={newToDo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button onClick={addTodo}>Add To Do</Button>
      </VStack>
    </Card>
  )
}
