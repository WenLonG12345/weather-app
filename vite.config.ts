import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        maximumFileSizeToCacheInBytes: 3000000,
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ["icon.webp", 'android-192x192.png', 'android-512x512.png'],
      manifest: {
        name: "Weather App",
        short_name: "Weather App",
        description: "Weather App",
        theme_color: "#9e8cdb",
        background_color: "#9e8cdb",
        icons: [
          {
            src: "/android-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
