<script lang="ts">
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  note: {
    type: Object,
    required: false,
  },
    
  },
  data() {
    return {
      note: null, 
    };
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
    <div class="content" @click.stop>
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
 margin: auto;
 }
</style>
