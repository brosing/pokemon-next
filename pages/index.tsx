import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      <Text fontSize="2xl" fontWeight="bold">I am Home</Text>
      <Link href="/pokemon">Get Pokemon</Link>
    </Box>
  );
}
