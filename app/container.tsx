"use client";

import { Flex, Text, Link, Grid } from "@chakra-ui/react";
import NextLink from "next/link";
import { PokemonTypes } from "../types/types";
import { motion } from "framer-motion";

export default function Container({ types }: { types: PokemonTypes }) {
  return (
    <Flex
      flexDir="column"
      gap={4}
      px={{ base: 4, md: 14 }}
      py={{ base: 8, md: 10 }}
      h="100vh"
    >
      <Text
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        textAlign="center"
      >
        Choose your type!
      </Text>

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        h="100%"
      >
        {types.results.map((type) => (
          <Flex
            key={type.name}
            justifyContent="center"
            alignItems="center"
            as={motion.div}
            whileHover={{
              scale: [null, 1.5, 1.3],
              transition: { duration: 0.3 },
              textTransform: "uppercase",
            }}
          >
            <Link
              as={NextLink}
              href={`/${type.name}`}
              p={{ base: 2, md: 4 }}
              _hover={{ textDecor: "none", fontWeight: "bold" }}
            >
              {type.name}
            </Link>
          </Flex>
        ))}
      </Grid>

      <Link
        as={NextLink}
        href={`/pokemon`}
        p={{ base: 2, md: 4 }}
        textAlign="center"
        color="darkgoldenrod"
        fontWeight="bold"
        opacity={0.7}
        _hover={{ textDecor: "none" }}
      >
        or get random pokemon?
      </Link>
    </Flex>
  );
}
