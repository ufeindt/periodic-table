<script setup lang="ts">
import PeriodicTable from './components/PeriodicTable.vue'
</script>

<template>
  <header>
    <h1>The Periodic Table of Elements</h1>
  </header>

  <main>
    <PeriodicTable />
  </main>
</template>

<style scoped>
header {
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;
}

h1 {
  text-align: center;
  width: 100%;
}
</style>
