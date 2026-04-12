/// <reference types="vite-plugin-pwa/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare module "vitepress-plugin-google-analytics" {
  import type { Theme } from "vitepress";
  const plugin: (options: { id: string }) => void;
  export default plugin;
}

declare module "vitepress-plugin-nprogress" {
  import type { EnhanceAppContext } from "vitepress";
  const plugin: (ctx: EnhanceAppContext) => void;
  export default plugin;
}

interface Window {
  adsbygoogle: any[] | undefined;
}
