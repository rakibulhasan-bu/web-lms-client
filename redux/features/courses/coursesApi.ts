import { apiSlice } from "../api/appSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "create-course",
        method: "POST",
        body: data,
        credential: "include" as const,
      }),
    }),
  }),
});

export const { useCreateCourseMutation } = courseApi;
