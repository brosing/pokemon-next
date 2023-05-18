"use client";

import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <Flex
      w="100%"
      h="100%"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={70}
        h={70}
        as={motion.div}
        style={{
          originX: 1,
          originY: 1,
        }}
        animate={{
          rotate: [-1, 1.5, 0],
          transition: {
            repeat: Infinity,
            delay: 1,
          },
        }}
      >
        <Image
          src="/pokeball.png"
          alt="Loading"
          height={70}
          width={70}
          style={{ objectFit: "contain", margin: 0 }}
        />
      </Box>
    </Flex>
  );
}
