import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './TransactionSlice'; // Adjust the import path

const store = configureStore({
    reducer: {
        transactions: transactionReducer,
    },
});

export default store;
