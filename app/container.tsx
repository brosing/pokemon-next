"use client";

import {
  Flex,
  Box,
  Link,
  FormLabel,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PokemonTypes } from "../types/types";
import { motion } from "framer-motion";

function TypeLink({ name }: { name: string }) {
  return (
    <Box
      as={motion.div}
      opacity="0.2"
      py={2}
      whileHover={{
        scale: [null, 1.5, 1.3],
        transition: { duration: 0.3 },
        originX: 0,
        textTransform: "uppercase",
        fontWeight: 700,
        opacity: 1,
      }}
    >
      <Link
        as={NextLink}
        href={`/${name}`}
        p={{ base: 2, md: 4 }}
        _hover={{ textDecor: "none" }}
      >
        {name}
      </Link>
    </Box>
  );
}

export default function Container({ types }: { types: PokemonTypes }) {
  return (
    <Flex
      h="100vh"
      p={{ base: 8, md: 0 }}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w={{ base: "100vw", md: 800 }}
        h={{ base: "100vh", md: 400 }}
        m="auto"
        position="relative"
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex
          flex={{ base: 0, md: 1 }}
          flexDir="column"
          gap={{ base: 4, md: 10 }}
          py={{ base: 8, md: 0 }}
          justifyContent="center"
        >
          <FormControl maxW={300}>
            <FormLabel>Search</FormLabel>
            <Input placeholder="Pokemon name" variant="flushed" px={4} />
          </FormControl>

          <Link
            as={NextLink}
            href={`/pokemon`}
            color="darkgoldenrod"
            fontWeight="400"
            opacity={0.7}
            _hover={{ textDecor: "none" }}
          >
            or get random one
          </Link>
        </Flex>

        <Text
          position={{ base: "relative", md: "absolute" }}
          top={{ base: "unset", md: "calc(50% + 50px)" }}
          left={{ base: "unset", md: "50%" }}
          rotate={{ base: "unset", md: "-90" }}
          transformOrigin="left"
          transform="auto"
          letterSpacing={{ base: 0, md: 4 }}
        >
          choose by type
        </Text>

        <Box
          flex={1}
          overflow="auto"
          pl={{ base: 4, md: 8 }}
          py={{ base: 4, md: 0 }}
        >
          {types.results.map((type) => (
            <TypeLink key={type.name} name={type.name} />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
}
