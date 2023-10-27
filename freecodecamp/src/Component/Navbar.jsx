import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { userEmail, isAuth } = useSelector((store) => store.auth);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
          <Box display={{ base: "none", md: "block" }}>
              <Input placeholder="Search 8,000+ tutorials" />
            </Box>
          </Link>

          <Center>
            <Text fontSize="xl">FreeCodeCamp (A)</Text>
          </Center>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} display={{ base: "none", md: "block" }}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {isAuth ? (
                <Button  >
                   <a href="/">Logout</a>
                </Button>
                
              ) : (
                <>
                  <Button
                    as={Link}
                    to="/menu"
                    p="8px 16px"
                    mx="4px"
                    bg="black"
                    color="white"
                    borderRadius="8px"
                    border="1px solid white"
                    display={{ base: "none", md: "block" }}
                  >
                    Menu
                  </Button>
                  <Button
                    as={Link}
                    to="/signup"
                    p="8px 16px"
                    mx="4px"
                    bg="yellow"
                    color="black"
                    borderRadius="8px"
                  >
                    Sign In
                  </Button>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;
