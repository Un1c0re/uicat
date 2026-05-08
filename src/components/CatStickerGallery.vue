<script setup lang="ts">
import { ElMessage } from 'element-plus'
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
  { id: 24, component: Cat24 },
  { id: 25, component: Cat25 },
]

const stickerElements = new Map<number, HTMLElement>()

const setStickerElement = (id: number, element: unknown) => {
  if (element instanceof HTMLElement) {
    stickerElements.set(id, element)
    return
  }

  stickerElements.delete(id)
}

const copyStickerAsPng = async (id: number) => {
  const container = stickerElements.get(id)
  const svg = container?.querySelector('svg')

  if (!(svg instanceof SVGSVGElement)) {
    ElMessage.error('Не удалось найти SVG для копирования')
    return
  }

  if (!navigator.clipboard || typeof ClipboardItem === 'undefined') {
    ElMessage.error('Буфер обмена PNG не поддерживается в этом браузере')
    return
  }

  try {
    const pngBlob = await renderSvgToPng(svg)
    await navigator.clipboard.write([
      new ClipboardItem({
        'image/png': pngBlob,
      }),
    ])

    ElMessage.success(`Cat${id} скопирован как PNG`)
  } catch {
    ElMessage.error('Не удалось скопировать стикер как PNG')
  }
}

const renderSvgToPng = async (svgElement: SVGSVGElement) => {
  const serializedSvg = new XMLSerializer().serializeToString(svgElement)
  const svgBlob = new Blob([serializedSvg], { type: 'image/svg+xml;charset=utf-8' })
  const objectUrl = URL.createObjectURL(svgBlob)

  const sourceWidth =
    Number(svgElement.getAttribute('width')) ||
    svgElement.viewBox.baseVal.width ||
    svgElement.clientWidth ||
    128
  const sourceHeight =
    Number(svgElement.getAttribute('height')) ||
    svgElement.viewBox.baseVal.height ||
    svgElement.clientHeight ||
    128

  const maxExportSize = 1024
  const scale = maxExportSize / Math.max(sourceWidth, sourceHeight)
  const width = Math.max(1, Math.round(sourceWidth * scale))
  const height = Math.max(1, Math.round(sourceHeight * scale))

  try {
    const image = await loadImage(objectUrl)
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    const context = canvas.getContext('2d')
    if (!context) {
      throw new Error('Canvas 2D context is unavailable')
    }

    context.clearRect(0, 0, width, height)
    context.drawImage(image, 0, 0, width, height)

    const pngBlob = await canvasToBlob(canvas)
    if (!pngBlob) {
      throw new Error('PNG blob is empty')
    }

    return pngBlob
  } finally {
    URL.revokeObjectURL(objectUrl)
  }
}

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('Image loading failed'))
    image.src = src
  })

const canvasToBlob = (canvas: HTMLCanvasElement) =>
  new Promise<Blob | null>((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png')
  })
</script>

<template>
  <el-space direction="vertical" fill size="large" style="width: 100%">
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
        <el-card
          shadow="hover"
          style="margin-bottom: 16px; cursor: pointer"
          @click="copyStickerAsPng(sticker.id)"
        >
          <el-space direction="vertical" alignment="center" fill style="width: 100%">
            <div :ref="(element) => setStickerElement(sticker.id, element)">
              <component :is="sticker.component" />
            </div>
            <el-tag type="info" effect="plain">Cat{{ sticker.id }}</el-tag>
          </el-space>
        </el-card>
      </el-col>
    </el-row>
  </el-space>
</template>
