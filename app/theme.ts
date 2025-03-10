import { createSystem, defaultBaseConfig, defineConfig } from '@chakra-ui/react'
import {fonts} from "tada/app/fonts";

const customConfig = defineConfig({
  theme: {
    colors: {
      primary: '#FF69B4',
      secondary: '#FFA07A',
      accent: '#FF4500',
      background: '#FFFFFF',
      text: '#000000',
    },
    fonts: {
      heading: fonts.montserrat.style.fontFamily,
      body: fonts.openSans.style.fontFamily,
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    styles: {
      global: {
        body: {
          bg: 'background',
          color: 'text',
        },
      },
    },
  },
} as any)

export const system = createSystem(defaultBaseConfig, customConfig)