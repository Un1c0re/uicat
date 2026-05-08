<template>
  <div class="code-highlight">
    <pre><code ref="codeElement" :class="`language-${language}`">{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import "prismjs/themes/prism.css";

import Prism from "prismjs";
import {nextTick, onMounted, ref, watch} from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: 'javascript',
  },
})

const emit = defineEmits<{ highlighted: [] }>()

const codeElement = ref<HTMLElement | null>(null)

const highlightCode = async () => {
  if (codeElement.value) {
    await nextTick()
    Prism.highlightElement(codeElement.value)
    emit('highlighted')
  }
}

onMounted(highlightCode)

watch(() => props.code, highlightCode)
</script>

<style scoped>
.code-highlight {
  border: 1px solid #d4d7de;
  border-radius: 6px;
  overflow: hidden;
}

pre {
  margin: 0;
  text-indent: 0;
  overflow-x: auto;
}

:deep(pre[class*='language-']) {
  margin: 0;
  padding: 16px 18px;
  background: #f6f8fb;
}

:deep(code[class*='language-']) {
  font-size: 0.875rem;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: 'Cascadia Code', 'Fira Code', Consolas, monospace;
}
</style>
