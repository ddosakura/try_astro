<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import { darkModeAtom } from '@/stores'

const darkMode = useStore(darkModeAtom)
const handleClick = () => {
  darkModeAtom.set(!darkMode.value)
}
</script>

<template>
  <div class="bg-black color-white dark:(bg-white color-black)">
    <div>vue</div>
    <button @click="handleClick">darkMode: {{ [darkMode] }}</button>
  </div>
</template>
