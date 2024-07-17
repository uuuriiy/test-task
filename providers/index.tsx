'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { global } from 'styles/global'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={global}>{children}</ChakraProvider>
}