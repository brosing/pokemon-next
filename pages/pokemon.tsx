import { Box, Button, Card, CardBody, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

import { Pokemon } from "../model";

const getURL = () => {
  const random = Math.floor(Math.random() * 99) + 1;
  return `https://pokeapi.co/api/v2/pokemon/${random}`;
};

const RandomPokemon = ({ pokemon }: { pokemon: Pokemon | null }) => (
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

const useRandomPokemon = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleClick = async () => {
    setLoading(true);

    fetch(getURL())
      .then((res) => res.json())
      .then((res: Pokemon) => {
        setPokemon(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    pokemon,
    handleClick
  }
}

export default function Home() {
  const { loading, pokemon, handleClick } = useRandomPokemon();

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

          <Button
            colorScheme="red"
            size="lg"
            onClick={handleClick}
            isLoading={loading}
          >
            SUMMON POKEMON
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
}
