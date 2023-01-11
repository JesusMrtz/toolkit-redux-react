import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { pokemons, isLoading, page: nextPage } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  
  useEffect(() => {
    /** Llamamos al thunk del pokemon  */
    dispatch( getPokemons( nextPage ) );
  }, []);

  function getPokemonsPerPage(page) {
    dispatch( getPokemons(page) );
  } 
  

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>
        Loading: { isLoading ? 'true' : 'false' }
      </span>
      <ul>
        {
          pokemons.map(pokemon => (
            <li key={ pokemon.name }>{ pokemon.name }</li>
          ))
        }
      </ul>
      <button type="button" disabled={ nextPage < 2 } onClick={ () => getPokemonsPerPage(nextPage - 2) }>Página anterior</button>
      <button type="button" disabled={ isLoading } onClick={ () => getPokemonsPerPage(nextPage) }>Siguiente página</button>
    </>
  )
}
