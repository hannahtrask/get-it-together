import Image from 'next/image'
import {Box, Heading} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box style={{ padding: '2rem' }}>
      <Heading>Get it together, Han</Heading>
      <footer>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black' }}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </Box>
  )
}
