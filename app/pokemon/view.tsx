"use client"

import { Box, Button, Card, CardBody, Flex } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { RandomPokemon } from "../../components";
import { Pokemon } from "../../model";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonView({ pokemon }: Props) {
  const router = useRouter()

  const handleNumberClick = (id: string) => {
    router.push(`/pokemon?id=${id}`)
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
          <Flex gap={4}>
            <Button colorScheme="red" size="lg" onClick={() => handleNumberClick('1')}>1</Button>
            <Button colorScheme="red" size="lg" onClick={() => handleNumberClick('2')}>2</Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
}
