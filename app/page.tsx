"use client";

import { Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

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
      <Text fontSize="2xl" fontWeight="bold">
        a Home for Pokemon Summoner
      </Text>
      <Link
        href="/pokemon"
        as={NextLink}
        color="white"
        background="red.600"
        px={8}
        py={4}
        borderRadius={10}
        textDecoration="none"
      >
        Go Summon One
      </Link>
    </Box>
  );
}
