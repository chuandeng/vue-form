<template>
  <div>
    <h1 class="text-5xl font-bold mb-8">{{ msg }}</h1>

    <div class="space-y-4">
      <button
        type="button"
        class="px-4 py-2 font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        @click="count++"
      >
        count is {{ count }}
      </button>
      <p class="text-lg">
        Edit
        <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <div class="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
      <p>
        Check out
        <a
          href="https://vuejs.org/guide/quick-start.html#local"
          target="_blank"
          class="text-blue-500 hover:text-blue-600"
        >create-vue</a>, the official Vue + Vite starter
      </p>
      <p>
        Learn more about IDE Support for Vue in the
        <a
          href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
          target="_blank"
          class="text-blue-500 hover:text-blue-600"
        >Vue Docs Scaling up Guide</a>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>