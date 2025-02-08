<script setup lang="ts">
import { ref } from 'vue'
import { tableData } from '../utils/load-data'
import ElementCell from './ElementCell.vue'

const highlightedBlock = ref<string | null>(null)

function setHighlightedBlock(block: string) {
  if (highlightedBlock.value === block) {
    highlightedBlock.value = null
  } else {
    highlightedBlock.value = block
  }
}
</script>

<template>
  <div class="table">
    <template v-for="elementData in tableData" :key="elementData.atomicNumber">
      <ElementCell
        :data="elementData"
        :highlight="highlightedBlock === elementData.block"
        @click="setHighlightedBlock(elementData.block)"
      />
    </template>
  </div>
</template>

<style scoped>
.table {
  background-color: var(--color-background-mute);
  border-radius: 0.5rem;
  display: grid;
  gap: 0.25rem;
  grid-template-columns: repeat(18, 3rem);
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  width: fit-content;
}

@media screen and (min-width: 100rem) {
  .table {
    grid-template-columns: repeat(18, 5rem);
  }
}
</style>
