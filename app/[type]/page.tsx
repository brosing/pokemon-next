import Container from "./container";
import { getPokemonByType } from '../../utils/api'

export default async function Home({ params }: { params: { type: string }}) {
  const pokemons = await getPokemonByType(params.type)
  return <Container pokemons={pokemons} />
}