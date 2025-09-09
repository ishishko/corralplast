// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	// Ruta de despliegue para GitHub Pages
	site: "https://ishishko.github.io",
	base: "/corralplast/",

	vite: {
		plugins: [tailwindcss()],
	},
});
