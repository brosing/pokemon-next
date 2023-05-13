// 'use client'

// import {use} from 'react'

// import { useLocalStorage } from '../../utils/hooks';
import { Pokemon } from "../../model";
import { POKEMON_URL } from "../../utils/url";
import PokemonCard from "./pokemon-card";

export const getRandomPokemon = async (count: number): Promise<Pokemon> => {
  const random = Math.floor(Math.random() * count) + 1;
  const url = `${POKEMON_URL}/${random}`;
  return fetch(url).then((res) => res.json());
};

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
