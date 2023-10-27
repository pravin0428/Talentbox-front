import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function EmptyPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
      Oops! No Study Data Available 
      </Heading>
      <Text color={'gray.500'}>
      Hey, currently there's no study data available, but we're working hard to bring it to you soon.
      </Text>

       <Link to="/menu"><Heading as="h2" size="xl" mt={6} mb={2}>
      Go back
      </Heading></Link>
    </Box>
  )
}

export default EmptyPage