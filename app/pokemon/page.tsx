// 'use client'

// import {use} from 'react'

// import { useLocalStorage } from '../../utils/hooks';
import PokemonCard from "./pokemon-card";
import { getRandomPokemon } from '../../utils/api'
import { Pokemon } from "../../types/pokemon";

export default async function PokemonPage() {
  // const [count] = useLocalStorage('count', 100);
  const pokemon = await getRandomPokemon(1000);

  return (
    <PokemonCard
      name={pokemon.name}
      url={pokemon?.sprites.other?.["official-artwork"].front_default}
    />
  );
}
