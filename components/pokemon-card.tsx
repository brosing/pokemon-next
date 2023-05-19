"use client";

import { Button, Flex, Text, usePrevious } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useState, SyntheticEvent, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Pokemon } from "../types/pokemon";
import { invertColor, imageToRGBA } from "../utils/color";

interface Props {
  mon: Pokemon;
  noRefresh?: boolean;
}

export function PokemonCard({ mon, noRefresh = false }: Props) {
  const [onTransition, setOnTransition] = useState(false);
  const [RGB, setRGB] = useState<string>("0,0,0");
  const prevRGB = usePrevious(RGB) ?? "0,0,0";
  const router = useRouter();
  const imageSrc = mon.image ?? "/pokeball.png";

  const handleImageLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const rgba = imageToRGBA(e.currentTarget);

    if (rgba) {
      const modifyAlpha = rgba?.split(",").slice(0, -1).join(",");
      setRGB(modifyAlpha);
    }
    setOnTransition(false);
  };

  useEffect(() => {
    setOnTransition(true);
  }, [mon.name]);

  return (
    <Flex
      h="100vh"
      w="100%"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      as={motion.div}
      background={RGB}
      animate={
        noRefresh
          ? {}
          : { backgroundColor: [`rgba(${prevRGB}, 0.3)`, `rgba(${RGB}, 0.3)`] }
      }
    >
      <Flex gap={2} flexDir="column" alignItems="center">
        <motion.div
          animate={{
            opacity: onTransition ? 0 : 1,
          }}
        >
          <Image
            src={imageSrc}
            alt={mon.name}
            onLoad={handleImageLoad}
            height={400}
            width={400}
            style={{ objectFit: "contain" }}
          />
        </motion.div>

        <Flex gap={4} alignItems="baseline">
          <Text
            textTransform="capitalize"
            fontSize="3xl"
            fontWeight="bold"
            as={motion.p}
            animate={
              noRefresh
                ? {}
                : { color: [invertColor(prevRGB), invertColor(RGB)] }
            }
          >
            {mon.name}
          </Text>

          {mon.name !== mon.species && (
            <Text
              fontSize="xl"
              position="relative"
              top="-3px"
              as={motion.p}
              animate={
                noRefresh
                  ? {}
                  : { color: [invertColor(prevRGB), invertColor(RGB)] }
              }
            >
              ({mon.species})
            </Text>
          )}
        </Flex>

        <Flex gap={4} mb={10}>
          {mon.types.map((type) => (
            <Text
              key={type}
              as={motion.p}
              animate={
                noRefresh
                  ? {}
                  : { color: [invertColor(prevRGB), invertColor(RGB)] }
              }
            >
              {type}
            </Text>
          ))}
        </Flex>
      </Flex>

      {noRefresh === false && (
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
            rotate: onTransition ? [0, 60] : 0,
            transition: {
              repeat: onTransition ? Infinity : 0,
            },
          }}
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.9 }}
          isDisabled={onTransition}
        >
          <RepeatIcon fontSize={24} />
        </Button>
      )}
    </Flex>
  );
}
