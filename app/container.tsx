'use client'

import { Box, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { PokemonTypes } from "../types/types";

// import { useLocalStorage } from "../utils/hooks";
// import { useEffect } from "react";

export default function Container({ types }: { types: PokemonTypes }) {
  console.log('types', types);
  
  // const [_, setStorage] = useLocalStorage<number>('count', count)

  // useEffect(() => {
  //   setStorage(count)
  // }, [count, setStorage])

  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={10}
    >
      <Text fontSize="2xl" fontWeight="bold">
        A Home for Pokemon Summoner
      </Text>
      <Button
        as={NextLink}
        href="/pokemon"
        colorScheme="blackAlpha"
        rounded="full"
        mx={5}
        p={8}
        fontSize="2xl"
      >
        Summon Pokemon!
      </Button>
    </Box>
  );
}
