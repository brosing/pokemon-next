// import { POKEMON_URL } from "../utils/url";
import Container from "./container";
import { getPokemonTypes } from '../utils/api'

export default async function HomePage() {
  const types = await getPokemonTypes()
  return <Container types={types} />
}