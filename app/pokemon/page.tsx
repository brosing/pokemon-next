import { PokemonCard } from "../../components";
import { getRandomPokemon } from "../../utils/api";

export default async function PokemonPage() {
  const pokemon = await getRandomPokemon(1000);
  const url = pokemon?.sprites.other?.["official-artwork"].front_default ?? "";

  return <PokemonCard name={pokemon.name} url={url} />;
}
