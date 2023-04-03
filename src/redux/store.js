// import { configureStore } from "@reduxjs/toolkit";
// import CounterSlices from "./slices/CounterSlices";

import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";

// export const store=configureStore({
//     reducer:{
//         counter:CounterSlices
//     }
// })

export const store=configureStore({
    reducer:{
        cart:CartSlice
    }
})