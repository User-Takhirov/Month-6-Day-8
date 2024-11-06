import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const compDetailApi = createApi({
  reducerPath: "compDetail_api",
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getCompDetail: build.query({
      query: (id) => {
        return {
          url: `/computer/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCompDetailQuery } = compDetailApi;
