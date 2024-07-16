<script lang="ts">
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },

  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
  components: {},
};
</script>

<template>
  <div class="dialog" @click="hideModal" v-if="show">
    <div class="content" >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;  
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;  
  background-color: rgba(0, 0, 0, 0.4); 

}

.content {
 max-width: 600px;
 margin: 20vh auto;
 background-color: white;
 padding: 30px;
 border-radius: 15px;
 }
</style>
