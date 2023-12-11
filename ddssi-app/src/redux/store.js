import { configureStore } from '@reduxjs/toolkit';
import activeNavSlice from './activeNavSlice';


export const store = configureStore({
    reducer: {
        activeNav: activeNavSlice
    }
});