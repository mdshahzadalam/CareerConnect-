// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })



import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    allowedHosts: ["careerconnectpro.onrender.com"],
    host: "0.0.0.0",
    port: process.env.PORT || 4173,
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
  }
})
