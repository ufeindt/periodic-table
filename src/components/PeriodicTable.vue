<script setup lang="ts">
import { computed, ref } from 'vue'
import { tableData } from '../utils/load-data'
import ElementCell from './ElementCell.vue'

const highlightedBlock = ref<string | null>(null)
const inverted = ref(false)
const maxRow = Math.max(...tableData.map((elementData) => elementData.row))

function setHighlightedBlock(block: string) {
  if (highlightedBlock.value === block) {
    highlightedBlock.value = null
  } else {
    highlightedBlock.value = block
  }
}

function toggleInverted() {
  inverted.value = !inverted.value
}
</script>

<template>
  <div class="table">
    <div class="invert-button" @click="toggleInverted"><p>Invert</p></div>
    <template v-for="elementData in tableData" :key="elementData.atomicNumber">
      <ElementCell
        :data="elementData"
        :highlight="highlightedBlock === elementData.block"
        :inverted="inverted"
        :maxRow="maxRow"
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

.invert-button {
  align-items: center;
  background-color: var(--color-background-soft);
  border-color: var(--color-border);
  border-style: solid;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  grid-column: 9 / 11;
  grid-row: 1;
  height: 3.75rem;
  justify-content: center;
  padding: auto;
}
.invert-button p {
  font-size: 1.25rem;
}

@media screen and (min-width: 100rem) {
  .table {
    grid-template-columns: repeat(18, 5rem);
  }

  .invert-button {
    height: 5.5rem;
  }
  .invert-button p {
    font-size: 1.875rem;
  }
}
</style>
