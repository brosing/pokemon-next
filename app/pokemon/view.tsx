"use client"

import { Alert, Box, Button, Card, CardBody, useToast } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { RandomPokemon } from "../../components";
import { Pokemon } from "../../model";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonView({ pokemon }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const toast = useToast()

  console.log(isPending)

  const handleClick = () => {
    toast({
      title: 'Gimana client fetch nya buat get random pokemon?',
      status: 'error',
      isClosable: true,
    })

    startTransition(() => {
      router.refresh()
    })
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
