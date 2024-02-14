import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import atracoesSlice from "./modules/atracoesSlice";

const rootRecucer = combineReducers({
    atracoes: atracoesSlice
});

export const persistedReducer = persistReducer(
    {
        key: "atlantida",
        storage: storage,
    },
    rootRecucer
);
