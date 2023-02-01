<template>
  <input
    type="text"
    @keydown.a="handler" />
</template>

<script>
export default {
  methods: {
    handler() {
      console.log('Enter!!')
    }
  }
}
</script>
