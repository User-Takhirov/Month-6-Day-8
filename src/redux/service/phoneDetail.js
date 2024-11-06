import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const phoneDetailApi = createApi({
  reducerPath: "phoneDetail_api",
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getPhoneDetail: build.query({
      query: (id) => {
        return {
          url: `/phones/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetPhoneDetailQuery } = phoneDetailApi;
