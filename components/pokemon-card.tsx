"use client";

import { Button, Flex, Image, usePrevious } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useState, SyntheticEvent } from "react";
import { motion } from "framer-motion";

import { invertColor, imageToRGBA } from "../utils/color";

interface Props {
  name: string;
  url: string;
}

export function PokemonCard({ name, url }: Props) {
  const [RGBColor, setRGBColor] = useState<string>("0,0,0");
  const prevRGBColor = usePrevious(RGBColor) ?? "0,0,0";
  const router = useRouter();
  const imageSrc = url ?? "/pokeball.png";

  const generateColor = (e: SyntheticEvent<HTMLImageElement>) => {
    const rgba = imageToRGBA(e.currentTarget);

    if (rgba) {
      const modifyAlpha = rgba?.split(",").slice(0, -1).join(",");
      setRGBColor(modifyAlpha);
    }
  };

  return (
    <Flex
      h="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap={10}
      as={motion.div}
      background={RGBColor}
      animate={{ backgroundColor: [`rgba(${prevRGBColor}, 0.3)`, `rgba(${RGBColor}, 0.3)`] }}
    >
      <Image
        src={imageSrc}
        alt={name}
        width={{ base: "100vw", md: "360px" }}
        height={{ base: "250px", md: "360px" }}
        onLoad={generateColor}
        opacity={1}
        objectFit="contain"
      />

      <Button
        onClick={router.refresh}
        colorScheme="blackAlpha"
        rounded="full"
        as={motion.button}
        size="lg"
        animate={{
          backgroundColor: [`rgb(${prevRGBColor})`, `rgb(${RGBColor})`] ,
          color: [invertColor(prevRGBColor), invertColor(RGBColor)]
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 }, }}
        whileTap={{ scale: 0.9 }}
      >
        {name}
        <RepeatIcon ml={4} />
      </Button>
    </Flex>
  );
}
