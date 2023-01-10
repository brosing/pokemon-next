"use client"

import { Box, Button, Card, CardBody } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

import { RandomPokemon } from "../../components";
import { Pokemon } from "../../model";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonView({ pokemon }: Props) {
  const router = useRouter()
  const handleClick = () => {
    // to refetch getPokemon in page.tsx
    router.refresh()
  }
  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Card shadow="2xl" size="lg">
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={10}
        >
          <RandomPokemon pokemon={pokemon} />

          <Button colorScheme="red" size="lg" onClick={handleClick}>
            SUMMON POKEMON
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
}
