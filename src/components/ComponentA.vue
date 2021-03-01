<template>
  <div class="component-a">
    <h3>Component A</h3>
    <h6>
      Text:
      <span v-html="textA"></span>
    </h6>
    <TrixComponent :id="id" @dataFromTrix="getDataFromTrix"></TrixComponent>
  </div>
</template>

<script>
import TrixComponent from "./TrixComponent";
export default {
  components: {
    TrixComponent
  },
  data() {
    return {
      textA: "",
      id: "A"
    };
  },
  methods: {
    getDataFromTrix: function(data) {
      this.textA = data;
    }
  }
};
</script>

