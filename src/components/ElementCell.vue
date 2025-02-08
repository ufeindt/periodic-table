<script setup lang="ts">
import { reactive } from 'vue'
import type { ElementData } from '@/utils/load-data'
const { data } = defineProps<{ data: ElementData }>()
const inlineStyle = reactive({ 'grid-column': data.column, 'grid-row': data.row })
console.log(inlineStyle)
</script>

<template>
  <div class="element" :style="inlineStyle">
    <p class="atomic-number">{{ data.atomicNumber }}</p>
    <p class="symbol">{{ data.symbol }}</p>
    <p class="name" lang="de">{{ data.name }}</p>
  </div>
</template>

<style scoped>
.element {
  background-color: var(--color-background-soft);
  border-color: var(--color-border);
  border-style: solid;
  border-radius: 0.5rem;
  height: 3.75rem;
  padding: 0.25rem;
  width: 3rem;
}

.atomic-number {
  font-size: 0.5rem;
}
.symbol {
  font-size: 1.25rem;
  text-align: center;
}
.name {
  font-size: 0.5rem;
  hyphens: auto;
  text-align: center;
}
</style>
