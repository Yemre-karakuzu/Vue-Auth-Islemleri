<template>
  <div>
    <Header />
    <HomePage />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/Header";

export default {
  components: {
    Header,
  },
};
</script>
