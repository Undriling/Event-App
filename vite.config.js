import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   headers: {
  //     "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
  //     "Cross-Origin-Embedder-Policy": "require-corp",
  //   },
  // },
  resolve: {
    alias: {
      "@": path.resolve( "./src"),
    },
  },
})