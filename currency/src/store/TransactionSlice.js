import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactions: [],
    error: null,
};

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
            state.error = null; // Clear any previous error
        },
        updateTransaction: (state, action) => {
            const updatedTransaction = action.payload;
            const index = state.transactions.findIndex(transaction => transaction.id === updatedTransaction.id);
            if (index !== -1) {
                state.transactions[index] = updatedTransaction;
                state.error = null; // Clear any previous error
            } else {
                state.error = 'Transaction not found';
            }
        },
        deleteTransaction(state, action) {
            const id = action.payload;
            state.transactions = state.transactions.filter((transaction) => transaction.id !== id);
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearTransactions: (state) => {
            state.transactions = [];
            state.error = null; // Clear any previous error
        },
    },
});

export const {deleteTransaction, addTransaction, updateTransaction, setError, clearTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
