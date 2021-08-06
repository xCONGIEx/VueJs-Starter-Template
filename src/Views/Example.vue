<template>
  <div id="content">
    <p>
      This view is using the HelloWorld.vue file as a component within itself.
      You are essentially viewing a new web page right now vs what you saw on
      the homescreen.
    </p>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Example",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
#content {
  background-color: rgb(156, 156, 156);
}
</style>
