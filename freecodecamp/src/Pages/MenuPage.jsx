import React from 'react'
import { Box, Button, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
 
import {MdComputer} from 'react-icons/md';
import { Link } from 'react-router-dom';
const stripData = [
    {
        id: 1,
        title : "(New) Responsive Web design certification (300 hours)"
    },
    {
        id: 2,
        title : "Legacy Responcive Web Design Certification (300 hours)"
    },
    {
        id: 3,
        title : "Javascript Algorithm And Data Structures certification (300 hours)"
    },
    {
        id: 4,
        title : "FrontEnd Developent Library Certification (300 hours)"
    },
    {
        id: 5,
        title : "Data Visualization Certification (300 hours)"
    },
    {
        id: 6,
        title : "BackEnd Developent and API's Certification (300 hours)"
    },
    {
        id: 7,
        title : "Quality Assurance Certification (300 hours)"
    }

]

function MenuPage() {
  const containerWidth = useBreakpointValue({ base: '90%', sm: '70%', md: '60%', lg: '40%' });

  return (
    <> 
    <Heading style={{ fontFamily: "'Roboto Slab', serif" , fontWeight : "300" , fontSize:"20px" , marginTop : "1%" , marginBottom : "1%"}} >Wellcome to FreeCodeCamp.org</Heading>
    <Text style={{ margin: "auto" ,fontFamily: "'Roboto Slab', serif" , fontWeight : "200" , fontSize:"15px"    , width : "25%"}}>I Have not failed I've just found 10,000 ways that won't work </Text>
    <Box
      margin="auto"
      boxShadow="lg"
      mt="1%"
      height="auto"
      width={containerWidth}
      padding={['4', '4', '6']} // Responsive padding
    >
         {
        stripData?.map((elem) => (

            <Box
    key={elem.id}
    display="flex"
    border="1px solid black"
    mb="2"
    textAlign="start"
    p="2%"
    style={{ fontFamily: "'Roboto Slab', serif", fontSize: "12px" }}
    alignItems="center" // Center the content vertically
  >
    <Box>
      <MdComputer size={24} /> {/* Adjust the icon size as needed (e.g., size={24}) */}
    </Box>
    <Link to="/empty"> <Box marginLeft="3px"> {/* Add a margin to create a gap */}
      {elem.title}
    </Box></Link>
  </Box>

        ))
       }
       
      
      
      
      
    </Box>
    </>
  )
}

export default MenuPage