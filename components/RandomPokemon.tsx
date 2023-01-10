"use client"
import { Text, Image } from "@chakra-ui/react";

import { Pokemon } from "../model";

export const RandomPokemon = ({ pokemon }: { pokemon: Pokemon | null }) => (
  <>
    <Text fontSize="2xl" fontWeight="medium" align="center">
      {pokemon?.name.toUpperCase() ?? "POKEBALL"}
    </Text>

    <Image
      src={
        pokemon?.sprites.other?.["official-artwork"].front_default ??
        "/pokeball.png"
      }
      alt="Pokeball"
      width={360}
      height={360}
    />
  </>
);