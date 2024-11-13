import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // pokemonList: JSON.parse(localStorage.getItem("pokemonList")) || [],
  pokemonList: [],
};

const pokemonDexSlice = createSlice({
  name: "pokemonDex",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.pokemonList.push({
        id: action.payload.id,
        img_url: action.payload.img_url,
        korean_name: action.payload.korean_name,
        types: action.payload.types,
        description: action.payload.description,
      });
    },
    removePokemon: (state, action) => {
      state.pokemonList = state.pokemonList.filter(
        (pokemon) => pokemon.id !== action.payload.id
      );
    },
  },
});

export default pokemonDexSlice.reducer;
export const { addPokemon, removePokemon } = pokemonDexSlice.actions;
