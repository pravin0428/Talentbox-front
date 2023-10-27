import { Box, Button, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { AiFillApple , AiFillAmazonCircle} from 'react-icons/ai';
import { BsMicrosoft , BsSpotify} from 'react-icons/bs';
 
function HomePage() {
  const containerWidth = useBreakpointValue({ base: '90%', sm: '70%', md: '60%', lg: '40%' });

  return (
    <Box
      margin="auto"
       boxShadow="lg"
      mt="4%"
      height="auto"
      width={containerWidth}
      padding={['4', '4', '6']} // Responsive padding
    >
      <Box textAlign="start" pl="1%">
        <Heading fontWeight="medium">Learn To Code - Free</Heading>
        <br />
        <Heading fontWeight="medium">Build Projects</Heading>
        <br />
        <Heading fontWeight="medium">Earn Certification</Heading>
        <br />
        <Text fontWeight="medium">
          Since 2014, more than 40,000 FreeCodeCamp Org graduates have gotten jobs at tech companies including
        </Text>
      </Box>
      <br />
      <Box display="flex" justifyContent={['center', 'space-between']} pl="1%">
      <Box display="flex" alignItems="center">
        <AiFillApple size={24} />
        <Box ml="2">Apple</Box>
      </Box>
      <Box>Google</Box>
      <Box display="flex" alignItems="center">
        <BsMicrosoft size={18} />
        <Box ml="2">Microsoft</Box>
      </Box>
      <Box display="flex" alignItems="center">
        <BsSpotify size={20} />
        <Box ml="2">Spotify</Box>
      </Box>
      <Box display="flex" alignItems="center">
        <AiFillAmazonCircle size={24} />
        <Box ml="2">Amazon.in</Box>
      </Box>
    </Box>
      <br />
      <Button bg="yellow" width="100%" fontSize={['lg', 'xl']} mt="4" fontWeight="light">
        Get Started It's Free
      </Button>
    </Box>
  );
}

export default HomePage;
