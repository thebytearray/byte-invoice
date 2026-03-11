import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react"

const fallback =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'

const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "lg",
  },
})

const customThemeConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: `"Geist", "Geist Sans", ${fallback}` },
        body: { value: `"Geist", "Geist Sans", ${fallback}` },
        mono: {
          value: `"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`,
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
  globalCss: {
    html: {
      colorPalette: "teal",
    },
  },
})

export const system = createSystem(defaultConfig, customThemeConfig)
