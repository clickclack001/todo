import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // включает глобальные переменные, как в Jest
    environment: 'jsdom', // используем jsdom для тестирования, так как это имитирует браузер
    //setupFiles: './vitest.setup.ts', // файл для начальной настройки (опционально)
    coverage: {
      reporter: ['text', 'json', 'html'], // настройка отчета о покрытии (по желанию)
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

  },
})

