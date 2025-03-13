import React from 'react'
import { Box, Flex, Button, Heading } from '@chakra-ui/react'

export const Navigation = () => {
  return (
    <Box
      as="nav"
      style={{
        padding: '.75rem 1rem',
        marginBottom: '1rem',
        boxShadow: 'md',
        borderRadius: '12px',
      }}
    >
      <Flex justify="space-between" align="center">
        <Heading as="h2" size="md" pl={4} variant="h2">
          get it together, han
        </Heading>
        <Flex gap={4} pr={4}>
          <Button
            variant="outline"
            shadow="md"
            borderRadius="full"
            px={4}
            py={2}
          >
            Home
          </Button>
          <Button
            variant="outline"
            shadow="md"
            borderRadius="full"
            px={4}
            py={2}
          >
            Settings
          </Button>
          <Button
            variant="outline"
            shadow="md"
            borderRadius="full"
            px={4}
            py={2}
          >
            Notes
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
