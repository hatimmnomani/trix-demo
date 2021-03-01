<template>
  <div>
    <input :id="id" type="hidden" name="content" v-model="trixText">
    <!-- updated here -->
    <trix-editor :input="id"></trix-editor>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      trixText: ""
    };
  },
  methods: {
    setTextToTrix(e) {
      this.trixText = document.getElementById(this.id).value;
    },
    emitDataBackToComponent() {
      this.$emit("dataFromTrix", this.trixText);
    }
  },
  mounted() {
    document.addEventListener("trix-change", this.setTextToTrix);
  },
  beforeDestroy: function() {
    document.removeEventListener("trix-change", this.setTextToTrix);
  },
  updated() {
    this.emitDataBackToComponent();
  }
};
</script>
