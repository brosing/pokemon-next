"use client";

import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      gap={10}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={20} h={20}
        as={motion.div}
        style={{
          originX: 1,
          originY: 1,
          backgroundImage: "url('/pokeball.png')",
          backgroundSize: 'contain'
        }}
        animate={{
          rotate: [-1, 1.3, 0],
          transition: {
            repeat: Infinity,
            // duration: 0.1,
          },
        }}
      />
    </Flex>
  );
}
