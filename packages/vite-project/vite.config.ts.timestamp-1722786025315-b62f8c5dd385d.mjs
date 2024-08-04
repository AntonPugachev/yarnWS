var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// vite.config.ts
import { defineConfig } from "file:///Users/antonpugachev/projects/yarnWS/.yarn/__virtual__/vite-virtual-11853a9ae6/0/cache/vite-npm-5.3.5-3cbb728ee4-5672dde4a9.zip/node_modules/vite/dist/node/index.js";
import react from "file:///Users/antonpugachev/projects/yarnWS/.yarn/__virtual__/@vitejs-plugin-react-virtual-eca5b7e2ed/0/cache/@vitejs-plugin-react-npm-4.3.1-cbe92983ea-a9d1eb30c9.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "node:path";
var getPaths = (pathNames) => {
  return pathNames.reduce((acc, pathName) => {
    acc.push(path.resolve(__require.resolve(`@monorepo/${pathName}/package.json`), ".."));
    return acc;
  }, []);
};
var vite_config_default = defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: getPaths(["shared-components"])
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW50b25wdWdhY2hldi9wcm9qZWN0cy95YXJuV1MvcGFja2FnZXMvdml0ZS1wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYW50b25wdWdhY2hldi9wcm9qZWN0cy95YXJuV1MvcGFja2FnZXMvdml0ZS1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hbnRvbnB1Z2FjaGV2L3Byb2plY3RzL3lhcm5XUy9wYWNrYWdlcy92aXRlLXByb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuXG5jb25zdCBnZXRQYXRocyA9IChwYXRoTmFtZXM6IHN0cmluZ1tdKSA9PiB7XG4gIHJldHVybiBwYXRoTmFtZXMucmVkdWNlKChhY2MsIHBhdGhOYW1lKSA9PiB7XG4gICAgYWNjLnB1c2gocGF0aC5yZXNvbHZlKHJlcXVpcmUucmVzb2x2ZShgQG1vbm9yZXBvLyR7cGF0aE5hbWV9L3BhY2thZ2UuanNvbmApLCAnLi4nKSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10gYXMgc3RyaW5nW10pO1xufTtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgaW5jbHVkZVBhdGhzOiBnZXRQYXRocyhbJ3NoYXJlZC1jb21wb25lbnRzJ10pLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFnVyxTQUFTLG9CQUFvQjtBQUM3WCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRWpCLElBQU0sV0FBVyxDQUFDLGNBQXdCO0FBQ3hDLFNBQU8sVUFBVSxPQUFPLENBQUMsS0FBSyxhQUFhO0FBQ3pDLFFBQUksS0FBSyxLQUFLLFFBQVEsVUFBUSxRQUFRLGFBQWEsUUFBUSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ2xGLFdBQU87QUFBQSxFQUNULEdBQUcsQ0FBQyxDQUFhO0FBQ25CO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGNBQWMsU0FBUyxDQUFDLG1CQUFtQixDQUFDO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
