<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();
const router = useRouter();

function increment() {
	counterStore.increment();
}

function goToAbout() {
	router.push({ name: 'about' });
}
</script>

<template>
	<div class="home-page">
		<h1>Vite Boilerplate</h1>
		<button type="button" @click="increment">
			count is: {{ counterStore.count }}
		</button>
		<span @click="goToAbout" class="home-page__about">Go to about page</span>
	</div>
</template>

<style lang="scss" scoped>
.home-page {
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&__about {
		margin-top: 1rem;
		text-decoration: underline;
		color: #42b983;
		cursor: pointer;
	}
}
</style>
