import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { pokemonStore } from "./redux/config/store.js"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider pokemonStore={pokemonStore}>
      <App />
    </Provider>
  </StrictMode>
);
