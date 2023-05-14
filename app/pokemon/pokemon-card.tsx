"use client";

import { Box, Button, Flex, Text, Image, usePrevious } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useState, SyntheticEvent } from "react";
import { motion } from "framer-motion";

import { invertColor, imageToRGBA } from "../../utils/color";

interface Props {
  name: string;
  url?: string;
}

export default function PokemonCard({ name, url }: Props) {
  const [RGBColor, setRGBColor] = useState<string>("0,0,0");
  const prevRGBColor = usePrevious(RGBColor) ?? "0,0,0";
  const router = useRouter();
  const imageSrc = url ?? "/pokeball.png";

  const handleClick = () => {
    router.refresh();
  };

  const generateColor = (e: SyntheticEvent<HTMLImageElement>) => {
    const rgba = imageToRGBA(e.currentTarget);
    
    if (rgba) {
      const modifyAlpha = rgba?.split(',').slice(0, -1).join(',')
      setRGBColor(modifyAlpha);
    }
  };

  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gap={10}
        p="40px"
        w={{ base: "100vw", md: "440px" }}
        h={{ base: "100vh", md: "auto" }}
        shadow="2xl"
        rounded={{ base: 0, md: "40px" }}
        flexDirection="column"
        justifyContent={{ base: "space-between", md: "center" }}
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
          flex={1}
          objectFit="contain"
        />

        <Flex gap={4} justifyContent="space-around" alignItems="center">
          <Text
            textTransform="capitalize"
            fontSize="2xl"
            fontWeight="medium"
            align="center"
            as={motion.p}
            animate={{ color: [`rgb(${prevRGBColor})`, `rgb(${RGBColor})`] }}
            noOfLines={1}
            overflow="hidden"
            textOverflow="ellipsis"
            flex={1}
          >
            {name}
          </Text>

          <Button
            onClick={handleClick}
            colorScheme="blackAlpha"
            rounded="full"
            w={12}
            h={12}
            as={motion.button}
            fontSize={20}
            animate={{
              backgroundColor: [`rgb(${prevRGBColor})`, `rgb(${RGBColor})`] ,
              color: [invertColor(prevRGBColor), invertColor(RGBColor)]
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <RepeatIcon />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
