<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();
const router = useRouter();

function increment() {
	counterStore.increment();
}

function goToHome() {
	router.push({ name: 'home' });
}
</script>

<template>
  <div class="about">
    <h1>About boilerplate</h1>
    <span @click="goToHome" class="about__go-to-home">Go Back to Home</span>
    <p>Current count: {{ counterStore.count }}</p>
    <button type="button" @click="increment">Add</button>
    <ul>
      <li>Vite + TS</li>
      <li>Pinia</li>
      <li>Router</li>
      <li>SASS</li>
      <li>Vitest + testing-library</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__go-to-home {
    text-decoration: underline;
    color: #42b983;
    cursor: pointer;
  }
}
</style>
