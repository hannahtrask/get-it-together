import { extendTheme, ThemeConfig, defineStyleConfig } from '@chakra-ui/react'
import { fonts } from 'tada/app/fonts'

const gentleColors = {
  gentleSage: '#B2BEB5',
  gentleOrange: '#FFA07A',
  gentlePink: '#FFB6C1',
  gentlePurple: '#D8BFD8',
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
      'html, body': {
        backgroundColor: gentleColors.gentlePurple,
        color: gentleColors.gentleBlue,
        fontFamily: "'Roboto', sans-serif",
        lineHeight: '1.6',
        minHeight: '100vh',
        height: '100%',
        width: '100%',
      },
      '#__next': {
        height: '100%',
        width: '100%',
      },
      h1: {
        color: gentleColors.gentleOrange,
        fontSize: '3xl',
        fontWeight: 'bold',
        marginBottom: '1rem',
      },
      h2: {
        color: gentleColors.gentleSky,
        fontSize: '2xl',
        fontWeight: 'semibold',
        marginBottom: '1rem',
      },
      h3: {
        color: gentleColors.gentlePeach,
        fontSize: 'xl',
        fontWeight: 'semibold',
        marginBottom: '1rem',
      },
      h4: {
        color: gentleColors.gentleSky,
      },
      p: {
        color: gentleColors.gentlePurple,
        fontSize: 'md',
        marginBottom: '1rem',
      },
      a: {
        color: gentleColors.gentleBlue,
        textDecoration: 'underline',
        _hover: {
          textDecoration: 'none',
          color: gentleColors.gentleRed,
        },
      },
    },
  },
  components: {
    Button: buttonStyles,
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
            boxShadow: '0 0 0 1px #B2BEB5',
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        borderColor: gentleColors.gentlePink,
        _focus: {
          borderColor: gentleColors.gentleSage,
          boxShadow: '0 0 0 1px #B2BEB5',
        },
      },
    },
    Badge: {
      variants: {
        subtle: {
          bg: gentleColors.gentlePeach,
          color: gentleColors.gentleBlue,
        },
        solid: {
          bg: gentleColors.gentleSage,
          color: 'white',
        },
      },
    },
    Card: {
      baseStyle: {
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
          color: gentleColors.gentleSky,
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
