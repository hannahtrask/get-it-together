import { Open_Sans, Montserrat } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const fonts = {
  openSans,
  montserrat,
}
