// vite.config.js
import { defineConfig } from "file:///D:/Task/Testing-React-Laravel-/node_modules/vite/dist/node/index.js";
import laravel from "file:///D:/Task/Testing-React-Laravel-/node_modules/laravel-vite-plugin/dist/index.js";
import react from "file:///D:/Task/Testing-React-Laravel-/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["resources/js/main.jsx"],
      refresh: true
    }),
    react({
      fastRefresh: true,
      jsxRuntime: "automatic"
    })
  ],
  server: {
    host: "127.0.0.1",
    port: 5174,
    strictPort: true,
    cors: true,
    hmr: {
      host: "127.0.0.1",
      protocol: "ws",
      port: 5174
    },
    watch: {
      usePolling: true,
      interval: 1e3
    }
  },
  resolve: {
    alias: {
      "@": "/resources/js"
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    esbuildOptions: {
      target: "es2020"
    }
  },
  build: {
    outDir: "public/build",
    manifest: true,
    rollupOptions: {
      input: "resources/js/main.jsx"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxUYXNrXFxcXFRlc3RpbmctUmVhY3QtTGFyYXZlbC1cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFRhc2tcXFxcVGVzdGluZy1SZWFjdC1MYXJhdmVsLVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVGFzay9UZXN0aW5nLVJlYWN0LUxhcmF2ZWwtL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBbJ3Jlc291cmNlcy9qcy9tYWluLmpzeCddLFxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIHJlYWN0KHtcbiAgICAgICAgICAgIGZhc3RSZWZyZXNoOiB0cnVlLFxuICAgICAgICAgICAganN4UnVudGltZTogJ2F1dG9tYXRpYycsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgICAgICBwb3J0OiA1MTc0LFxuICAgICAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgICAgICBjb3JzOiB0cnVlLFxuICAgICAgICBobXI6IHtcbiAgICAgICAgICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgICAgICAgICAgcHJvdG9jb2w6ICd3cycsXG4gICAgICAgICAgICBwb3J0OiA1MTc0LFxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdXNlUG9sbGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGludGVydmFsOiAxMDAwLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgJ0AnOiAnL3Jlc291cmNlcy9qcycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgICAgaW5jbHVkZTogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgICAgICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIG91dERpcjogJ3B1YmxpYy9idWlsZCcsXG4gICAgICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBpbnB1dDogJ3Jlc291cmNlcy9qcy9tYWluLmpzeCcsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1IsU0FBUyxvQkFBb0I7QUFDL1MsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDSixPQUFPLENBQUMsdUJBQXVCO0FBQUEsTUFDL0IsU0FBUztBQUFBLElBQ2IsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0YsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDRCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsSUFDVjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0gsWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLElBQ2Q7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLO0FBQUEsSUFDVDtBQUFBLEVBQ0o7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNWLFNBQVMsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUEsSUFDbEQsZ0JBQWdCO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDWjtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxJQUNWLGVBQWU7QUFBQSxNQUNYLE9BQU87QUFBQSxJQUNYO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
