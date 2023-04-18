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
    <!-- 使用 dark:i-icon 防止 Hydration completed but contains mismatches. -->
    <button @click="handleClick" class="dark:(color-white)">switch <!-- {{ [darkMode] }} --></button>
  </div>
</template>
