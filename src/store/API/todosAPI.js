import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    /** Son las diferentes funciones que llamaremos para traer la información  */
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),

        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        })
    })
});


/**
 * Nos crea customHooks cuando utilizamos createApi de nuestros endpoints
 * getTodos -> useGetTodosQuery
 * getTodo -> useGetTodoQuery
 */
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;