// store --> action --> reducer

// designing the store 
// actions are like evenet --> addtocart,removefromcart,deleting etc 

//  todos --> [{},{}] 

// todo --> {
    // id,task , isdone
// }


import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer: todoReducer,
})