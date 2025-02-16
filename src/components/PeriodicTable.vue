<script setup lang="ts">
import { ref, reactive } from 'vue'
import { tableData, type ElementData } from '../utils/load-data'
import ElementCell from './ElementCell.vue'

const highlightedBlock = ref<string | null>(null)
const inverted = ref(false)
const searchTerm = ref('')
const maxRow = Math.max(...tableData.map((elementData) => elementData.row))

function getCellStyle(cellData: ElementData) {
  return {
    'grid-column': cellData.column,
    'grid-row': inverted.value ? maxRow - cellData.row + 2 : cellData.row,
  }
}

function searchMatch(cellData: ElementData): boolean {
  if (!searchTerm.value) {
    return false
  }
  const term = searchTerm.value.toLocaleLowerCase()

  return ['name', 'symbol', 'atomicNumber'].some((prop) =>
    cellData[prop]?.toString().toLocaleLowerCase().includes(term),
  )
}

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
  <input text v-model="searchTerm" />
  <div class="table">
    <div class="invert-button" @click="toggleInverted"><p>Invert</p></div>
    <ElementCell
      v-for="elementData in tableData"
      :key="elementData.atomicNumber"
      :data="elementData"
      :highlight="highlightedBlock === elementData.block"
      :match="searchMatch(elementData)"
      :style="getCellStyle(elementData)"
      @click="setHighlightedBlock(elementData.block)"
    />
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
