import { PokemonCard } from "../../components";
import { PokemonDTO, Pokemon } from "../../types/pokemon";
import { getRandomPokemon } from "../../utils/api";

const transformDTO = (d: PokemonDTO): Pokemon => ({
  name: d.name,
  image: d.sprites.other?.["official-artwork"].front_default ?? "",
  types: d.types.map((_) => _.type.name),
  species: d.species.name,
});

export default async function PokemonPage() {
  const data = await getRandomPokemon(1000);
  const pokemon = transformDTO(data);

  return <PokemonCard pokemon={pokemon} />;
}
