import type { Metadata } from 'next'
import { Providers } from 'tada/providers'

export const metadata: Metadata = {
  title: 'Get it Together',
  description: 'Keep track of your life and keep it together',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
