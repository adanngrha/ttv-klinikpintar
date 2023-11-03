<template>
  <div>
    <Header />
    <slot></slot>
    <Navigation />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Navigation from "./Navigation.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Navigation,
  },
};
</script>
