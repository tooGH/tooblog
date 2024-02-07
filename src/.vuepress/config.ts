import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
const base = process.env.BASE || '/tooblog/'
export default defineUserConfig({
  base: base,

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
