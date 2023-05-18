"use client";

import { Button, Flex, Text, usePrevious } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useState, SyntheticEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Pokemon, PokemonDTO } from "../types/pokemon";
import { invertColor, imageToRGBA } from "../utils/color";

interface Props {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: Props) {
  const [RGB, setRGB] = useState<string>("0,0,0");
  const prevRGB = usePrevious(RGB) ?? "0,0,0";
  const router = useRouter();
  const imageSrc = pokemon.image ?? "/pokeball.png";

  const generateColor = (e: SyntheticEvent<HTMLImageElement>) => {
    const rgba = imageToRGBA(e.currentTarget);
    if (rgba) {
      const modifyAlpha = rgba?.split(",").slice(0, -1).join(",");
      setRGB(modifyAlpha);
    }
  };

  return (
    <Flex
      h="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      as={motion.div}
      background={RGB}
      animate={{
        backgroundColor: [`rgba(${prevRGB}, 0.3)`, `rgba(${RGB}, 0.3)`],
      }}
    >
      <Image
        src={imageSrc}
        alt={pokemon.name}
        onLoad={generateColor}
        height={360}
        width={360}
        style={{ objectFit: "contain" }}
      />

      <Flex gap={4} alignItems="baseline">
        <Text
          textTransform="capitalize"
          fontSize="3xl"
          fontWeight="bold"
          as={motion.p}
          animate={{
            color: [invertColor(prevRGB), invertColor(RGB)],
          }}
        >
          {pokemon.name}
        </Text>

        {pokemon.name !== pokemon.species && (
          <Text
            fontSize="xl"
            position="relative"
            top="-3px"
            as={motion.p}
            animate={{
              color: [invertColor(prevRGB), invertColor(RGB)],
            }}
          >
            ({pokemon.species})
          </Text>
        )}
      </Flex>

      <Flex gap={4} mb={10}>
        {pokemon.types.map((type) => (
          <Text
            key={type}
            as={motion.p}
            animate={{
              color: [invertColor(prevRGB), invertColor(RGB)],
            }}
          >
            {type}
          </Text>
        ))}
      </Flex>

      <Button
        onClick={router.refresh}
        colorScheme="blackAlpha"
        rounded="full"
        as={motion.button}
        h={14}
        w={14}
        p={0}
        animate={{
          backgroundColor: [`rgb(${prevRGB})`, `rgb(${RGB})`],
          color: [invertColor(prevRGB), invertColor(RGB)],
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        whileTap={{ scale: 0.9 }}
      >
        <RepeatIcon fontSize={24} />
      </Button>
    </Flex>
  );
}
