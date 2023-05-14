"use client";

import { Box, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

import { PokemonType } from "../../types/types";

function PokemonItem({ name }: { name: string }) {
  const pokemonName = name.replaceAll("-", " ");

  return (
    <Box
      as={motion.div}
      whileHover={{
        originX: 0,
        scale: [null, 2, 1.9],
        padding: 8,
        transition: { duration: 0.3 },
        textTransform: "uppercase",
      }}
      _hover={{
        fontWeight: "bold",
      }}
    >
      <Link
        as={NextLink}
        display="block"
        href={`/pokemon/${name}`}
        textTransform="capitalize"
        fontSize="xl"
        _hover={{ textDecor: "none", fontWeight: "bold" }}
      >
        {pokemonName}
      </Link>
    </Box>
  );
}

export default function Container({ pokemons }: { pokemons: PokemonType }) {
  return (
    <Flex gap={4} flexDir="column" p={10}>
      {pokemons.pokemon.map((mon) => (
        <PokemonItem key={mon.pokemon.name} name={mon.pokemon.name} />
      ))}
    </Flex>
  );
}
