<template>
    <p>This view is using the HelloWorld.vue file as a component within itself. You are essentially viewing a new web page right now vs what you saw on the homescreen.</p>
  <HelloWorld />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: "Example",
  components: {
      HelloWorld
  },
};
</script>

<style scoped></style>
