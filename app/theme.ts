import { extendTheme, ThemeConfig, defineStyleConfig } from '@chakra-ui/react'
import { fonts } from 'tada/app/fonts'

const gentleColors = {
  gentleSage: '#4b6551',
  gentleOrange: '#FFA07A',
  gentlePink: '#FFB6C1',
  gentlePurple: '#ccb1e3',
  gentleBlue: '#ADD8E6',
  gentleSky: '#F0F8FF',
  gentlePeach: '#FFDAB9',
  gentleRed: '#FA8072',
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const buttonStyles = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    _focus: {
      boxShadow: 'outline',
    },
  },
  variants: {
    solid: {
      bg: gentleColors.gentleOrange,
      color: 'white',
      _hover: {
        bg: gentleColors.gentleSage,
        transform: 'scale(1.05)',
      },
      _active: {
        bg: gentleColors.gentlePink,
      },
    },
    outline: {
      borderColor: gentleColors.gentlePink,
      color: gentleColors.gentlePink,
      _hover: {
        borderColor: gentleColors.gentleOrange,
        color: gentleColors.gentleOrange,
      },
    },
    ghost: {
      color: gentleColors.gentlePink,
      _hover: {
        bg: gentleColors.gentlePeach,
        color: 'white',
      },
    },
  },
  sizes: {
    lg: {
      height: '48px',
      fontSize: 'lg',
      px: '32px',
    },
    md: {
      height: '40px',
      fontSize: 'md',
      px: '24px',
    },
    sm: {
      height: '32px',
      fontSize: 'sm',
      px: '16px',
    },
  },
})

const theme = extendTheme({
  config,
  colors: {
    gentle: gentleColors,
  },
  fonts: {
    heading: fonts.montserrat.style.fontFamily,
    body: fonts.openSans.style.fontFamily,
  },
  styles: {
    global: {
      ':root': {
        '--chakra-colors-gentleSage': gentleColors.gentleSage,
        '--chakra-colors-gentleOrange': gentleColors.gentleOrange,
        '--chakra-colors-gentlePink': gentleColors.gentlePink,
        '--chakra-colors-gentlePurple': gentleColors.gentlePurple,
        '--chakra-colors-gentleBlue': gentleColors.gentleBlue,
        '--chakra-colors-gentleSky': gentleColors.gentleSky,
        '--chakra-colors-gentlePeach': gentleColors.gentlePeach,
        '--chakra-colors-gentleRed': gentleColors.gentleRed,
      },
      'html, body': {
        backgroundColor: gentleColors.gentlePurple,
        color: gentleColors.gentleBlue,
      },
    },
  },
  components: {
    Button: buttonStyles,
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: gentleColors.gentlePink,
          _checked: {
            bg: gentleColors.gentlePink,
            borderColor: gentleColors.gentlePink,
          },
          _hover: {
            borderColor: gentleColors.gentleOrange,
          },
        },
      },
      defaultProps: {
        colorScheme: 'pink', // Default color scheme
      },
    },
    Input: {
      baseStyle: {
        field: {
          backgroundColor: gentleColors.gentleSky,
          borderColor: gentleColors.gentlePink,
          _hover: {
            borderColor: gentleColors.gentleOrange,
          },
          _focus: {
            borderColor: gentleColors.gentleSage,
            boxShadow: `0 0 0 1px ${gentleColors.gentleSage}`,
          },
        },
      },
    },
    IconButton: {
      baseStyle: {
        bg: gentleColors.gentlePink,
        color: 'white',
        _hover: {
          bg: gentleColors.gentleOrange,
        },
        _active: {
          bg: gentleColors.gentleSage,
        },
      },
    },
    Card: {
      baseStyle: {
        bg: gentleColors.gentleSky,
        borderColor: gentleColors.gentlePurple,
        borderWidth: '2px',
        borderRadius: '50%',
        boxShadow: 'md',
        padding: '4rem',
      },
      variants: {
        elevation: {
          boxShadow: 'lg',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        h1: {
          fontSize: '3xl',
          color: gentleColors.gentleOrange,
        },
        h2: {
          fontSize: '2xl',
          color: gentleColors.gentleSage,
        },
        h3: {
          fontSize: 'xl',
          color: gentleColors.gentleSage,
        },
      },
    },
  },
})

export default theme
