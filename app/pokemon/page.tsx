import { Pokemon } from "../../model";
import PokemonView from "./view";

const generateURL = (id?: string | null) => {
  const random = Math.floor(Math.random() * 99) + 1;
  return `https://pokeapi.co/api/v2/pokemon/${id ?? random}`;
};

export const getPokemon = async (id?: string | null): Promise<Pokemon> => {
  return fetch(generateURL(id)).then((res) => res.json())
};

export default async function PokemonPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined }}) {
  const pokemon = await getPokemon(searchParams?.id as string);

  return (
    <PokemonView pokemon={pokemon} />
  );
}
