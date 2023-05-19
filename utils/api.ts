import { PokemonDTO } from "../types/pokemon";
import { PokemonTypes, PokemonType } from "../types/types";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonTypes = (): Promise<PokemonTypes> => {
  return fetch(`${BASE_URL}/type`).then((res) => res.json());
};

export const getPokemonByType = (type: string): Promise<PokemonType> => {
  return fetch(`${BASE_URL}/type/${type}`).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.status);
    }

    return res.json();
  });
};

export const getPokemon = async (name: string): Promise<PokemonDTO> => {
  const url = `${BASE_URL}/pokemon/${name}`;
  return fetch(url).then((res) => res.json());
};

export const getRandomPokemon = async (
  count: number = 1000
): Promise<PokemonDTO> => {
  const random = Math.floor(Math.random() * count) + 1;
  const url = `${BASE_URL}/pokemon/${random}`;
  return fetch(url, { cache: "no-store" }).then((res) => res.json());
};
