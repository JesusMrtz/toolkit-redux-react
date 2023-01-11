import { pokemonAPI } from "../../../API/pokemonAPI";
import { loadingPokemon, setPokemons } from "./pokemonSlice";


export const getPokemons = ( page = 0 ) => {
  /** El dispatch llamará a otra acción */
  return async ( dispatch, getState ) => {
    dispatch( loadingPokemon() );

    /** Realizaremos una petición HTTP */
    const { data } = await pokemonAPI.get(`/pokemon?limit=10&offset=${ page * 10 }`);
    dispatch( setPokemons({
      pokemons: data.results,
      page: page + 1
    }) );
  }
}