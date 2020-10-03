import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import Head from '@/components/Head'

export let BaseLayoutHeader: React.FC = function () {
  return (
    <Box width='100%' as='header' p='4'>
      <Flex
        alignItems='center'
        width='100%'
        maxWidth='4xl'
        mx='auto'
        color='black'
      >
        <Box w='35px' h='35px' bg='black' mr='4' borderRadius='50%'></Box>
        <Box fontSize='2xl' fontWeight='bold'>
          Triângulo
        </Box>
      </Flex>
    </Box>
  )
}

export let BaseLayout: React.FC = function ({ children }) {
  return (
    <>
      <Head />
      <Box w='100%' mx='auto' bg='white'>
        {children}
      </Box>
    </>
  )
}
