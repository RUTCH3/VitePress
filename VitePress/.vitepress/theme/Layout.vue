<!-- <script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'

const { lang } = useData()
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template> -->

<template>
  <div>
    <div class="my-banner">ברוכים הבאים לאתר!</div>
    <DefaultTheme.Layout />
  </div>
</template>
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
</script>