"use client";

import { Text } from "@chakra-ui/react";


export default function Pokemon({ params }: { params: { name: string }}) {
  return (
    <Text fontSize="5xl" m={8}>
      {params.name}
    </Text>
  );
}