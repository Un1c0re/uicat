<script setup lang="ts">
import {onMounted, ref} from 'vue'

const isOpen = ref(false)
// const baseUrl = 'https://cataas.com/cat/gif'
const baseUrl = 'http://62.60.228.113:1337/cat/gif'
const loading = ref(false);
const gifUrl = ref("");

const loadGif = () => {
  loading.value = true;
  gifUrl.value = `${baseUrl}?ts=${Date.now()}`;
}

onMounted(() => {
  loadGif();
})
</script>

<template>
  <el-button type="primary" @click="isOpen = true">🐈 Показать</el-button>
  <el-dialog
      v-model="isOpen"
      width="640"
      align-center
      destroy-on-close
      :show-close="false"
  >
    <div>
      <el-image
          :src="gifUrl"
          fit="contain"
          alt="Cat GIF"
          style="width: 520px"
          @load="loading = false"
      />
    </div>
    <template #footer>
      <el-button type="primary" @click="loadGif()">Еще</el-button>
      <el-button type="danger" @click="isOpen = false">Закрыть</el-button>
    </template>
  </el-dialog>
</template>
