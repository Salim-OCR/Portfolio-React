import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import replace from "@rollup/plugin-replace";
import dotenv from 'dotenv';

dotenv.config(); // Charge les variables d'environnement depuis le fichier .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      // Définissez ici vos variables d'environnement
      "process.env.VITE_REACT_APP_SERVICE": JSON.stringify(
        process.env.VITE_REACT_APP_SERVICE
      ),
      "process.env.VITE_REACT_APP_TEMPLATE": JSON.stringify(
        process.env.VITE_REACT_APP_TEMPLATE
      ),
      "process.env.VITE_REACT_APP_ID": JSON.stringify(
        process.env.VITE_REACT_APP_ID
      ),
      preventAssignment: true, // Définissez preventAssignment sur true
    }),
  ],
});
