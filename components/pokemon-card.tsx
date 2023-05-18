"use client";

import { Button, Flex, usePrevious } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useState, SyntheticEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { invertColor, imageToRGBA } from "../utils/color";

interface Props {
  name: string;
  url: string;
}

export function PokemonCard({ name, url }: Props) {
  const [RGB, setRGB] = useState<string>("0,0,0");
  const prevRGB = usePrevious(RGB) ?? "0,0,0";
  const router = useRouter();
  const imageSrc = url ?? "/pokeball.png";

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
      gap={10}
      as={motion.div}
      background={RGB}
      animate={{ backgroundColor: [`rgba(${prevRGB}, 0.3)`, `rgba(${RGB}, 0.3)`] }}
    >
      <Image
        src={imageSrc}
        alt={name}
        onLoad={generateColor}
        height={360}
        width={360}
        style={{objectFit: "contain"}}
      />

      <Button
        onClick={router.refresh}
        colorScheme="blackAlpha"
        rounded="full"
        as={motion.button}
        size="lg"
        animate={{
          backgroundColor: [`rgb(${prevRGB})`, `rgb(${RGB})`] ,
          color: [invertColor(prevRGB), invertColor(RGB)]
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
