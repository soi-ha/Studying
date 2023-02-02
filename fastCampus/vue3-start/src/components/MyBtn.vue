<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <div
    v-bind="$attrs"></div>
</template>

<script>
export default {
  inheritAttrs: false,
  created() {
    console.log(this.$attrs)
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