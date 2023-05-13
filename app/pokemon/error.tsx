'use client'

import { Flex, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex w="100vh" h="100vh" justifyContent="center" alignItems="center">
      <Flex gap={4}>
        <Text fontWeight="medium" color="red">Oops.. Something went wrong ??</Text>
      </Flex>
    </Flex>
  )
}