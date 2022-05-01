import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserModel } from "../../models/UserModel";
import { baseUrl } from "../../utils/ApiUtil";

const UsersApiSlice = createApi({
    reducerPath: "UsersApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints(builder) {
        return {
            fetchUsers: builder.query<UserModel[], never | void>({
                query: () => "/users"
            }),
            fetchUser: builder.query<UserModel, string | void>({
                query: (uid) => `/users/${uid}`
            })
        }
    }
})


export const { useFetchUsersQuery ,useFetchUserQuery} = UsersApiSlice
export default UsersApiSlice