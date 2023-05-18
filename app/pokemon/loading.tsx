"use client";

import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={50}
        h={50}
        as={motion.div}
        style={{
          originX: 1,
          originY: 1,
        }}
        animate={{
          rotate: [-1, 1.3, 0],
          transition: {
            repeat: Infinity,
          },
        }}
      >
        <Image
          src="/pokeball.png"
          alt="Loading"
          height={50}
          width={50}
          style={{ objectFit: "contain", margin: 0 }}
        />
      </Box>
    </Flex>
  );
}
