<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <h1 @click="$emit('soha',123)">
    abc
  </h1>
  <input
    type="text"
    v-model="msg" />
</template>

<script>
export default {
  emits: [
    'soha',
    'changeMsg'
  ],
  data() {
    return {
      msg: ''
    }
  },
  watch: {
    msg() {
      this.$emit('changeMsg', this.msg)
    }
  }
}
</script>


<style scoped lang="scss">
  .btn {
    display: inline-block;
    margin: 4px;
    padding: 6px 12px;
    border-radius: 4px;
    background-color: gray;
    color: white;
    cursor: pointer;
  }
</style>