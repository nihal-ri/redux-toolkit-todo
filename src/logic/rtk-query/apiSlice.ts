import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),

    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",

        body: initialPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddNewPostMutation } = apiSlice;
