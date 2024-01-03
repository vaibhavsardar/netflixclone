import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/features/counterSlice'
import userReducer from '@/redux/features/userSlice'
import itemModelReducer from '@/redux/features/itemModelSlice'
import mylistReducer from '@/redux/features/mylistSlice'



export const store = configureStore({
  reducer: { counter: counterReducer,authuser: userReducer,mylist: mylistReducer,itemmodel:itemModelReducer},
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch