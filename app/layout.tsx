import type { Metadata } from 'next'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
