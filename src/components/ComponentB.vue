<template>
  <div class="component-b">
    <h3>Component B</h3>
    <h6>
      Text:
      <span v-html="textB"></span>
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
      textB: "",
      id: "B"
    };
  },
  methods: {
    getDataFromTrix: function(data) {
      this.textB = data;
    }
  }
};
</script>
