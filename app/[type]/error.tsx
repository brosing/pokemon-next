"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh" color="red">
      {error.message.includes("404") ? (
        <Text fontSize="xl" m={4}>
          Type not found!
        </Text>
      ) : (
        <Text fontSize="xl" m={4}>
          {error.message}
        </Text>
      )}
    </Flex>
  );
}
