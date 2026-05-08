import type { App, Component } from 'vue'

import CatGifModal from './components/CatGifModal.vue'
import {
  Cat1,
  Cat2,
  Cat3,
  Cat4,
  Cat5,
  Cat6,
  Cat7,
  Cat8,
  Cat9,
  Cat10,
  Cat11,
  Cat12,
  Cat13,
  Cat14,
  Cat15,
  Cat16,
  Cat17,
  Cat18,
  Cat19,
  Cat20,
  Cat21,
  Cat22,
  Cat23,
  Cat24,
  Cat25,
} from './components/ui'

export {
  Cat1,
  Cat2,
  Cat3,
  Cat4,
  Cat5,
  Cat6,
  Cat7,
  Cat8,
  Cat9,
  Cat10,
  Cat11,
  Cat12,
  Cat13,
  Cat14,
  Cat15,
  Cat16,
  Cat17,
  Cat18,
  Cat19,
  Cat20,
  Cat21,
  Cat22,
  Cat23,
  Cat24,
  Cat25,
  CatGifModal,
}

export const catStickers = {
  Cat1,
  Cat2,
  Cat3,
  Cat4,
  Cat5,
  Cat6,
  Cat7,
  Cat8,
  Cat9,
  Cat10,
  Cat11,
  Cat12,
  Cat13,
  Cat14,
  Cat15,
  Cat16,
  Cat17,
  Cat18,
  Cat19,
  Cat20,
  Cat21,
  Cat22,
  Cat23,
  Cat24,
  Cat25,
} satisfies Record<string, Component>

export const catStickerList = Object.entries(catStickers).map(([name, component]) => ({
  name,
  component,
}))

export interface UiCatPluginOptions {
  prefix?: string
}

const UiCat = {
  install(app: App, options: UiCatPluginOptions = {}) {
    const prefix = options.prefix ?? ''

    Object.entries(catStickers).forEach(([name, component]) => {
      app.component(`${prefix}${name}`, component)
    })

    app.component(`${prefix}CatGifModal`, CatGifModal)
  },
}

export default UiCat
