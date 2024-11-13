import { configureStore } from "@reduxjs/toolkit";
import pokemonDexSliceReducer from "../slice/PokemonSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const pokemonPersistConfig = {
  key: "pokemonDex",
  storage,
};

const persistedReducer = persistReducer(
  pokemonPersistConfig,
  pokemonDexSliceReducer,
);

export const pokemonStore = configureStore({
  reducer: {
    pokemonDex: persistedReducer, // add persisted reducer as a key-value
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const pokemonPersistor = persistStore(pokemonStore);
