import { Pokemon } from "../../model";
import PokemonView from "./view";

const generateURL = () => {
  const random = Math.floor(Math.random() * 99) + 1;
  return `https://pokeapi.co/api/v2/pokemon/${random}`;
};

export const getPokemon = async (): Promise<Pokemon> => {
  return fetch(generateURL()).then((res) => res.json())
};

export default async function PokemonPage() {
  const pokemon = await getPokemon();

  return (
    <PokemonView pokemon={pokemon} />
  );
}
