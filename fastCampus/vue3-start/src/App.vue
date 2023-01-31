<template>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Computed!'
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.split('').reverse().join('') 
    }
  },
  methods: {
    reverseMessage() {
      return this.msg.split('').reverse().join('') 
    }
  }
}
</script>
