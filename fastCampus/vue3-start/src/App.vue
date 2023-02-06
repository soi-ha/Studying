<template>
  <Hello ref="hello" />
</template>

<script>
import Hello from '~/components/Hello.vue'

export default {
  components: { 
    Hello 
  },
  mounted() {
    console.log(this.$refs.hello.$el)
  }
}
</script>
