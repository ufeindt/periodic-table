<script setup lang="ts">
import { tableData } from '../utils/load-data'
import ElementCell from './ElementCell.vue'
</script>

<template>
  <div class="table">
    <template v-for="elementData in tableData" :key="elementData.atomicNumber">
      <ElementCell :data="elementData" />
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
</style>
