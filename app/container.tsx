"use client";

import {
  Flex,
  Button,
  Link,
  Text,
  Grid,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PokemonTypes } from "../types/types";
import { motion } from "framer-motion";


function TypeLink({ name }: { name: string }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      as={motion.div}
      opacity="0.3"
      py={2}
      whileHover={{
        scale: [null, 1.4, 1.3],
        transition: { duration: 0.3 },
        transformOrigin: "center",
        textTransform: "uppercase",
        fontWeight: 700,
        opacity: 1,
      }}
    >
      <Link
        color="primary"
        as={NextLink}
        href={`/${name}`}
        p={{ base: 2, md: 4 }}
        _hover={{ textDecor: "none" }}
      >
        {name}
      </Link>
    </Flex>
  );
}

export default function Container({ types }: { types: PokemonTypes }) {
  return (
    <Flex
      h="100vh"
      gap={10}
      flexDir="column"
      p={{ base: 4, md: 0 }}
      justifyContent="center"
      alignItems="center"
    >

      <Text
        letterSpacing={{ base: 0, md: 4 }}
        color="primary"
        textTransform="uppercase"
      >
        choose by type
      </Text>

      <Grid templateColumns='repeat(4, 1fr)' textAlign="center" w={{ base: 'full', md: 400 }} h={400}>
        {types.results.map((type) => (
          <TypeLink key={type.name} name={type.name} />
        ))}
      </Grid>

      
      <Button
        as={NextLink}
        href={`/pokemon`}
        rounded="full"
        px={8}
        color="white"
        fontWeight="700"
        background="gold"
        _hover={{
          backgroundImage: 'linear-gradient(rgb(0 0 0/10%) 0 0)'
        }}
        prefetch
      >
        or get random one
      </Button>
    </Flex>
  );
}
