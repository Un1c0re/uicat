# UiCat

Набор Vue-стикеров с котиками, который можно собрать в npm-пакет и использовать в любом Vue 3 проекте.

## Сборка

```bash
npm install
npm run build
npm pack
```

## Использование

```ts
import { createApp } from 'vue'
import UiCat from 'uicat'

const app = createApp(App)

app.use(UiCat)
```

Если используются `CatGifModal`, в проекте нужно также подключить `Element Plus` и его CSS.

```ts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
```
