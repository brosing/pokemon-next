"use client";

import { Box, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

import { PokemonType } from "../../types/types";

interface Props {
  name: string;
  type: string;
}

function PokemonItem({ name, type }: Props) {
  const pokemonName = name.replaceAll("-", " ");
  const link = `/${type}/${name}`

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
        href={link}
        textTransform="capitalize"
        fontSize="xl"
        _hover={{ textDecor: "none", fontWeight: "bold" }}
      >
        {pokemonName}
      </Link>
    </Box>
  );
}

interface ContainerProps {
  mons: PokemonType;
  type: string;
}

export default function TypeContainer({ mons, type }: ContainerProps) {
  return (
    <Flex gap={4} flexDir="column" p={10}>
      {mons.pokemon.map((mon) => (
        <PokemonItem
          key={mon.pokemon.name}
          name={mon.pokemon.name}
          type={type}
        />
      ))}
    </Flex>
  );
}
