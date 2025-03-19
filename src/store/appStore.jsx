import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import dialogReducer from './dialogSlice';

const AppStore = configureStore ({
    reducer: {
        user: userReducer,
        dialog: dialogReducer,
    }
})

export default AppStore;