import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { registerUser } from "../redux/auth/action";
import { FaGoogle } from "react-icons/fa"; // Import Google icon

function Signup() {
  const { isRegister, loading, error } = useSelector((store) => store.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const isFormValid = () => {
    return (
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.username.trim() !== ""
    );
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid()) {
      toast({
        title: "Please fill in all the fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch(registerUser(formData));
    }
  }

  useEffect(() => {
    if (isRegister) {
      navigate("/login");
    }
  }, [isRegister]);

  if (loading) {
    return <div>....Loading</div>;
  } else if (error) {
    return (
      <div>....Error! please check your internet connection</div>
    );
  }

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg="gray.50"
      >
        <Stack
          borderRadius="10px"
          boxShadow={"lg"}
          p={{ base: "10px", md: "20px" }}
          w={{ base: "100%", md: "80%", lg: "70%", xl: "30%" }} // Adjust the width for desktop screens
          marginTop={{ base: "0", md: "-4%" }}
        >
          <Heading fontSize={{ base: "2xl", md: "3xl" , mb : "2px"}}>Signup Form</Heading>
     
          <FormControl id="userName" isRequired>
            <FormLabel>Full name</FormLabel>
            <Input
              placeholder="Enter Name"
              type="text"
              value={formData.username}
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="Enter Email"
              type="email"
              value={formData.email}
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter Password"
              type="password"
              value={formData.password}
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <br />
          <Button
            colorScheme="blue"
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </Button>

          

          <a href="http://localhost:8080/auth/google">
            <Button   colorScheme="red" leftIcon={<FaGoogle />}>LOGIN WITH GOOGLE</Button> {/* Add Google icon to the button */}
          </a>
          <Link to="/login">Alredy have account? Go To Login</Link>
        </Stack>
      </Flex>
    </>
  );
}

export default Signup;
