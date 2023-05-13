"use client";

import { Box, Button, Flex, Text, Image, usePrevious } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState, SyntheticEvent } from "react";
import { motion } from "framer-motion";

import { rgbaToHex, imageToRGBA } from "../../utils/color";

interface Props {
  name: string;
  url?: string;
}

export default function PokemonCard({ name, url }: Props) {
  const [color, setColor] = useState<string>("#ffffff");
  const prevColor = usePrevious(color);
  const router = useRouter();
  const imageSrc = url ?? "/pokeball.png";

  const handleClick = () => {
    router.refresh();
  };

  const generateColor = (e: SyntheticEvent<HTMLImageElement>) => {
    const rgba = imageToRGBA(e.currentTarget);
    if (rgba) setColor(rgbaToHex(rgba));
  };

  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      as={motion.div}
      background={color}
      animate={{ backgroundColor: [prevColor, color] }}
    >
      <Flex
        gap={10}
        p={8}
        shadow="2xl"
        rounded="40px"
        flexDirection="column"
        justifyContent="center"
        background="whiteAlpha.700"
      >
        <Text fontSize="2xl" fontWeight="medium" align="center">
          {name}
        </Text>

        <Image
          src={imageSrc}
          alt={name}
          width={360}
          height={360}
          onLoad={generateColor}
        />

        <Button
          onClick={handleClick}
          colorScheme="blackAlpha"
          rounded="full"
          mx={5}
          py={8}
          fontSize="2xl"
          as={motion.button}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
        >
          summon another
        </Button>
      </Flex>
    </Box>
  );
}
