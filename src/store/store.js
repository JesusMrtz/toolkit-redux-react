import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./API/todosAPI";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,

        /**  */
        [ todosApi.reducerPath ]: todosApi.reducer
    },

    /** Funciones que se ejecutarán antes que otras
     * Esta configuración del middleware es excusivamente para los todosApi
     */
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(todosApi.middleware)
});