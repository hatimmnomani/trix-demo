<template>
  <div id="app">
    <ComponentA/>
    <hr>
    <ComponentB/>
  </div>
</template>

<script>
// import TrixComponent from "./components/TrixComponent";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
export default {
  name: "App",
  components: {
    ComponentA,
    ComponentB
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
