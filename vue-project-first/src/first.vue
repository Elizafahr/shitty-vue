<script>
export default {
  data() {
    return {
      info: "title",
      someinfo: "lorrrr lorrrr",
    };
  },
  methods: {
    userData(s = "base") {
      (this.info = s), (this.someinfo = "some new someinfo");
    },
  },
};
</script>

<template>
  <h1>{{ info }}</h1>
  <p>{{ someinfo }}</p>
  <button type="button" v-on:click="userData('sssssss')">Send</button> */}
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
