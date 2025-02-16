<script setup lang="ts">
import { computed } from 'vue'
import type { ElementData } from '@/utils/load-data'
const {
  data,
  highlight = false,
  match = true,
} = defineProps<{
  data: ElementData
  highlight: boolean
  match: boolean
}>()
const inlineStyle = computed(() => {
  return {
    'background-color': highlight
      ? `var(--color-block-${data.block}-background)`
      : 'var(--color-background-soft)',
    'border-color': `var(--color-block-${data.block}-border)`,
  }
})
</script>

<template>
  <div class="element" :style="inlineStyle">
    <p class="atomic-number" :class="{ match: match }">{{ data.atomicNumber }}</p>
    <p class="symbol" :class="{ match: match }">{{ data.symbol }}</p>
    <p class="name" :class="{ match: match }" lang="de">{{ data.name }}</p>
  </div>
</template>

<style scoped>
.element {
  border-style: solid;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 3.75rem;
  padding: 0.25rem;
  width: 3rem;
}
.match {
  font-weight: 700;
  color: red;
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

@media screen and (min-width: 100rem) {
  .element {
    height: 5.5rem;
    width: 4.5rem;
  }

  .atomic-number {
    font-size: 0.75rem;
  }
  .symbol {
    font-size: 1.875rem;
    text-align: center;
  }
  .name {
    font-size: 0.75rem;
    hyphens: auto;
    text-align: center;
  }
}
</style>
