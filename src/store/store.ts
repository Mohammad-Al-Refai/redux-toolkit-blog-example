import { configureStore } from "@reduxjs/toolkit";
import ArticlesApiSlice from "./Articles/reducer";
import UsersApiSlice from "./Users/reducer";



const store = configureStore({
    reducer: {
        [UsersApiSlice.reducerPath]: UsersApiSlice.reducer,
        [ArticlesApiSlice.reducerPath]: ArticlesApiSlice.reducer
    }
    , middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(UsersApiSlice.middleware)
            .concat(ArticlesApiSlice.middleware)
    },
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store
