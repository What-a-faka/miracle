<template>
  <div id="app">
    <h1>hahaha</h1>
    <button @click="closeWindow">close Window</button>
  </div>
</template>

<script>
import { windowHelper } from "../../../src/main";

export default {
  name: "app",
  methods: {
    closeWindow() {
      windowHelper.windowClose();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
