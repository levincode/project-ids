import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "A&G",
      logo: {
        src: "./src/assets/logo.svg",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Contenido",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Resumen", link: "/contenido/resumen/" },
            { label: "Introducción", link: "/contenido/introduccion/" },
            { label: "Situación problemática", link: "/contenido/problema/" },
            { label: "Objetivos", link: "/contenido/objetivos/" },
          ],
        },
        {
          label: "Diagramas",
          autogenerate: { directory: "diagramas" },
        },
      ],
    }),
  ],
});
