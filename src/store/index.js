// import {createStore} from 'redux';
// import { createSlice ,configureStore} from '@reduxjs/toolkit';
// import {configureStore} from '@reduxjs/toolkit';
// import counterReducer from './counter';
// import authReducer from './auth';

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });
  // const  initialAuthState={
  //   isAuthenticated: false,
  // }

  // const authSlice= createSlice({
  //   name: 'authentication',
  //   initialState: initialAuthState,
  //   reducers:{
  //     login(state){
  //       state.isAuthenticated=true
  //     },
  //     logout(state){
  //       state.isAuthenticated=false

  //     },
  //   }
  // });
// // const createReducer =(state={counter: 0},action)=> {
//     const createReducer=(state= initialState,action)=>{
//     if(action.type === 'increment'){
//         return{
//             counter: state.counter + 1,
//             showCounter: initialState.showCounter
//         };
//         // state.counter++;
//         // return state;
//     }

//    if(action.type === 'increase'){
//     return{
//         counter: state.counter + action.amount,
//         showCounter: initialState.showCounter
//     };
//    }

//     if(action.type === 'decrement'){
//         return{
//             counter:state.counter -1,
//             showCounter: initialState.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//         }
//     }
//     return state;
// }
// const store = createStore(createReducer);
//  const store= createStore  (counterSlice.reducer);
// const store = configureStore({
    // reducer: counterSlice.reducer
//     reducer:{
//       counter: counterSlice.reducer,
//       auth: authSlice.reducer
//     },
// })
// const store = configureStore({
//   reducer: { counter: counterReducer, auth: authReducer },
// });

// export const counterActions = counterSlice.actions;
// export const authAction = authSlice.actions;


// export default store;
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;