import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/auth/action";
import GoogleLogin from "../Component/GoogleLogin";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const { isAuth, loading, error, error_message , token } = useSelector((store) => store.auth);
  console.log(error_message , "LKJFDf")
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const toast = useToast();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Add form validation logic here
    if (!formData.email || !formData.password) {
      // Show an error message to indicate that both fields are required.
      toast({
        title: "Both email and password are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    dispatch(loginUser(formData));
  }

  useEffect(() => {
    if (token) {
      navigate("/menu");
    } else if (error_message === "User not found...please regiter first") {
      // Display an alert and redirect to signup page
      alert("User not found...please regiter first")
      // toast({
      //   title: "User not found",
      //   description: "Please create a user account.",
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      // });
      navigate("/signup");
    }
  }, [isAuth, token, error]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack maxW={"lg"} marginTop="-4%" 
       w={{ base: "100%", md: "80%", lg: "40%", xl: "30%" }} // Adjust the width for desktop screens
      >
        <Box rounded={"lg"} bg={"white"} boxShadow={"xl"} p={10}>
          <Stack spacing={4}>
            <Heading fontSize={{ base: "2xl", sm: "3xl" }}>Login Form</Heading>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter email"
                type="email"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Enter password"
                type="password"
                value={formData.password}
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                color={"white"}
                bg={"blue.400"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={(e) => handleSubmit(e)}
              >
                LogIn
              </Button>
            </Stack>
          </Stack>
          <br />
          <Link to="/signup">Go to signup..</Link>
          
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
