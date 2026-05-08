<script setup lang="ts">
import CatGifModal from './components/CatGifModal.vue'
import CatStickerGallery from './components/CatStickerGallery.vue'
import CodeHighlight from './components/CodeHighlight.vue'

const installCommands = `npm install @un1c0re/uicat`

const usageExample = `import { createApp } from 'vue'
import UiCat from '@un1c0re/uicat'

const app = createApp(App)

app.use(UiCat)`

const elementPlusExample = `import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'`
</script>

<template>
  <el-container style="padding: 24px; max-width: 1200px; margin: 0 auto">
    <div class="flex flex-col gap-10">
      <el-space direction="vertical" fill size="small" style="width: 100%">
        <p class="font-bold text-2xl">🐱🙀😹😸UiCat😸😹🙀🐱</p>
        <el-text size="large">
          Набор Vue-стикеров с котиками, который можно собрать в npm-пакет и
          использовать в любом Vue 3 проекте.
        </el-text>
      </el-space>

      <el-space direction="vertical" fill style="width: 100%" class="text-left">
        <p class="text-lg">Установка</p>
        <CodeHighlight :code="installCommands" language="bash"/>
      </el-space>

      <el-space direction="vertical" fill style="width: 100%" class="text-left">
        <p class="text-lg">Использование</p>
        <CodeHighlight :code="usageExample" language="typescript"/>
      </el-space>

      <el-space direction="vertical" fill style="width: 100%" class="text-left flex items-center">
        <p class="text-lg">Element Plus</p>
        <el-text>
          Если используются
          <el-tag effect="plain">CatGifModal</el-tag>
          или другие
          компоненты пакета, в проекте нужно также подключить Element Plus и его CSS.
        </el-text>
        <CodeHighlight :code="elementPlusExample" language="typescript"/>
      </el-space>

      <el-divider/>

      <el-space direction="vertical" fill style="width: 100%">
        <p class="text-lg">Демо</p>
        <el-text>Кнопка, открывающая модальное окно с гифками котиков.</el-text>
        <div style="display: flex; justify-content: center; padding: 12px 0">
          <CatGifModal size="large"/>
        </div>
      </el-space>

      <el-space direction="vertical" fill style="width: 100%">
        <el-space direction="vertical" size="small" fill>
          <el-text tag="h2" size="large">Коллекция стикеров</el-text>
        </el-space>
        <CatStickerGallery/>
      </el-space>
    </div>
  </el-container>
</template>
