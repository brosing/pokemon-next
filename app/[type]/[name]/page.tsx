import { PokemonCard } from "../../../components";
import { PokemonDTO, Pokemon } from "../../../types/pokemon";
import { getPokemon } from "../../../utils/api";

const transformDTO = (d: PokemonDTO): Pokemon => ({
  name: d.name,
  image: d.sprites.other?.["official-artwork"].front_default ?? "",
  types: d.types.map((_) => _.type.name),
  species: d.species.name,
});

interface Props {
  params: { name: string }
}

export default async function PokemonPage({ params }: Props) {
  const data = await getPokemon(params.name);
  const pokemon = transformDTO(data);

  return <PokemonCard mon={pokemon} noRefresh />;
}
