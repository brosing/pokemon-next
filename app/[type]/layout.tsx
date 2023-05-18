"use client";

import { use } from "react";
import { Flex } from "@chakra-ui/react";

import Container from "./container";
import { getPokemonByType } from '../../utils/api'

interface Props {
  params: { type: string }
  children: React.ReactNode
}

export default function Home({ params, children }: Props) {
  const mons = use(getPokemonByType(params.type))
  return (
    <Flex h="100vh" w="100vw">
      <Container mons={mons} type={params.type} />
      {children}
    </Flex>
  )
}