<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { ElementData } from '@/utils/load-data'
const {
  data,
  highlight = false,
  inverted,
  maxRow,
} = defineProps<{ data: ElementData; highlight: boolean; inverted: boolean; maxRow: number }>()
const inlineStyle = reactive({
  'background-color': highlight
    ? `var(--color-block-${data.block}-background)`
    : 'var(--color-background-soft)',
  'border-color': `var(--color-block-${data.block}-border)`,
  'grid-column': data.column,
  'grid-row': inverted ? maxRow - data.row + 2 : data.row,
})

watch(
  () => highlight,
  (newValue) => {
    inlineStyle['background-color'] = newValue
      ? `var(--color-block-${data.block}-background)`
      : 'var(--color-background-soft)'
  },
)
watch(
  () => inverted,
  (newValue) => {
    inlineStyle['grid-row'] = newValue ? maxRow - data.row + 2 : data.row
  },
)
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
  border-style: solid;
  border-radius: 0.5rem;
  cursor: pointer;
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
