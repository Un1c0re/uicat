<script setup lang="ts">
import CatGifModal from './components/CatGifModal.vue'
import CatStickerGallery from './components/CatStickerGallery.vue'
</script>

<template>
  <el-container style="padding: 24px; max-width: 1440px; margin: 0 auto">
    <el-main>
      <el-space direction="vertical" fill size="large" style="width: 100%">
        <p class="font-bold text-2xl">MedInfoCenter.UiCat</p>
        <el-card shadow="never">
          <el-space direction="vertical" fill size="large">
            Кнопка, открывающая модальное окно с гифками котиков
          </el-space>
        </el-card>
        <el-card shadow="never">
          <div class="md:h-96 flex items-center justify-center">
            <CatGifModal size="large"/>
          </div>
        </el-card>

        <CatStickerGallery/>
      </el-space>
    </el-main>
  </el-container>
</template>
