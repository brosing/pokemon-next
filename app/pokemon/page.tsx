import PokemonCard from "./pokemon-card";
import { getRandomPokemon } from '../../utils/api'

export default async function PokemonPage() {
  const pokemon = await getRandomPokemon(1000);

  return (
    <PokemonCard
      name={pokemon.name}
      url={pokemon?.sprites.other?.["official-artwork"].front_default}
    />
  );
}
