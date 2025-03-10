import { createSystem, defaultBaseConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {},
})

export const system = createSystem(defaultBaseConfig, customConfig)
