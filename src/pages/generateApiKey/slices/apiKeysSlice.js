import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice";

const keysAdapter = createEntityAdapter([]);

const initialState = keysAdapter.getInitialState();

export const apiKeysSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApiKeys: builder.query({
      query: () => ({
        url: "/api-key/all",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        return keysAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "ApiKey", id: "LIST" },
            ...result.ids.map((id) => ({ type: "ApiKey", id })),
          ];
        } else return [{ type: "ApiKey", id: "LIST" }];
      },
    }),
    generateApiKey: builder.mutation({
      query: () => ({
        url: "/api-key/generate",
        method: "GET",
      }),
      invalidatesTags: [{ type: "ApiKey", id: "LIST" }],
    }),
    deleteApiKeys: builder.mutation({
      query: () => ({
        url: "/api-key/all",
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "ApiKey", id: "LIST" }],
    }),
    deleteApiKey: builder.mutation({
      query: ({ id }) => ({
        url: `/api-key/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "ApiKey", id: arg.id }],
    }),
  }),
});

export const {
  useGetApiKeysQuery,
  useGenerateApiKeyMutation,
  useDeleteApiKeysMutation,
  useDeleteApiKeyMutation,
} = apiKeysSlice;

// returns the query result object
export const selectApiKeysResult = apiKeysSlice.endpoints.getApiKeys.select();

// creates memoized selector
const selectApiKeysData = createSelector(
  selectApiKeysResult,
  (apiKeysResult) => apiKeysResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllApiKeys,
  selectIds: selectApiKeyIds,
  // Pass in a selector that returns the notes slice of state
} = keysAdapter.getSelectors(
  (state) => selectApiKeysData(state) ?? initialState
);
