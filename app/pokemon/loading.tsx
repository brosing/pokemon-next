'use client'

import { Flex, Skeleton } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex w="100vh" h="100vh" justifyContent="center" alignItems="center">
      <Flex gap={4} flexDir="column">
        <Skeleton rounded="40px" w="400px" h="360px" />
        <Skeleton rounded="40px" w="400px" h="100px" />
      </Flex>
    </Flex>
  )
}