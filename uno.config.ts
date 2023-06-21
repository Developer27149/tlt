// uno.config.ts
import { defineConfig, presetAttributify, presetTypography } from "unocss";

// import axios from "axios";
import presetIcons from "@unocss/preset-icons";
import { presetScrollbar } from "unocss-preset-scrollbar";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  rules: [],
  presets: [
    presetUno(),
    presetIcons({
      cdn: "https://esm.sh/",
    }),
    presetAttributify(),
    presetTypography(),
    // presetWebFonts({
    //   // use axios with an https proxy
    //   customFetch: (url: string) =>
    //     axios
    //       .get(url, {
    //         // httpsAgent: new ProxyAgent('https://localhost:7890')
    //       })
    //       .then((it) => it.data),
    //   provider: "google",
    //   fonts: {
    //     sans: "Roboto",
    //     mono: ["Fira Code", "Fira Mono:400,700"],
    //   },
    // }),
    presetScrollbar(),
  ],
});
