import { useToast } from "@chakra-ui/react";
function Tost({ status }) {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];

  return toast({
    title: `${status} toast`,
    status: status,
    isClosable: true,
  });
}

export default Tost;
