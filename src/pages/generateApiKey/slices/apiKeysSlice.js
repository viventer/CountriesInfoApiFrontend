import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../app/api/apiSlice";

let entityIdCounter = 0;
const keysAdapter = createEntityAdapter({
  selectId: (entity) => entityIdCounter++,
});

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
      query: (id) => ({
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

export const selectApiKeysResult = apiKeysSlice.endpoints.getApiKeys.select();

const selectApiKeysData = createSelector(
  selectApiKeysResult,
  (apiKeysResult) => apiKeysResult.data
);

export const { selectAll: selectAllApiKeys, selectIds: selectApiKeyIds } =
  keysAdapter.getSelectors((state) => selectApiKeysData(state) ?? initialState);
