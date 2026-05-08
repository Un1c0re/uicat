<script setup lang="ts">
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
} from './ui'

const stickers = [
  { id: 1, component: Cat1 },
  { id: 2, component: Cat2 },
  { id: 3, component: Cat3 },
  { id: 4, component: Cat4 },
  { id: 5, component: Cat5 },
  { id: 6, component: Cat6 },
  { id: 7, component: Cat7 },
  { id: 8, component: Cat8 },
  { id: 9, component: Cat9 },
  { id: 10, component: Cat10 },
  { id: 11, component: Cat11 },
  { id: 12, component: Cat12 },
  { id: 13, component: Cat13 },
  { id: 14, component: Cat14 },
  { id: 15, component: Cat15 },
  { id: 16, component: Cat16 },
  { id: 17, component: Cat17 },
  { id: 18, component: Cat18 },
  { id: 19, component: Cat19 },
  { id: 20, component: Cat20 },
  { id: 21, component: Cat21 },
  { id: 22, component: Cat22 },
  { id: 23, component: Cat23 },
]
</script>

<template>
  <el-space direction="vertical" fill size="large" style="width: 100%">
    <el-card shadow="never">
      <el-space direction="vertical" size="small" fill>
        <el-text tag="h2" size="large">Коллекция стикеров</el-text>
        <el-text>Стикеры можно импортировать по одному или подключать как весь пакет.</el-text>
      </el-space>
    </el-card>

    <el-row :gutter="16">
      <el-col
        v-for="sticker in stickers"
        :key="sticker.id"
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        :xl="4"
      >
        <el-card shadow="hover" style="margin-bottom: 16px">
          <el-space direction="vertical" alignment="center" fill style="width: 100%">
            <component :is="sticker.component" />
            <el-tag type="info" effect="plain">Cat{{ sticker.id }}</el-tag>
          </el-space>
        </el-card>
      </el-col>
    </el-row>
  </el-space>
</template>
