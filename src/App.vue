<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="flex gap-8 mb-8">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="h-24 transition duration-300 hover:drop-shadow-xl" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="h-24 transition duration-300 hover:drop-shadow-xl" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>