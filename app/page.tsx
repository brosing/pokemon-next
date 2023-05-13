// import { POKEMON_URL } from "../utils/url";
import Container from "./container";

// export const getPokemonCount = async (): Promise<number> => {
//   const data = await fetch(`${POKEMON_URL}?limit=1`)
//   const response = await data.json() as { count: number }
//   return response.count
// };

export default async function Home() {
  // const count = await getPokemonCount()
  return <Container count={0} />
}