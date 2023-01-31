<template>
  <h1
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle">
    Hello?!
  </h1>
</template>

<script>
export default {
  data() {
    return {
      fontStyle: {
        color: 'orange',
        fontSize: '30px'
      },
      backgroundStyle: {
        backgroundStyle: 'black'
      }
    }
  },
  methods: {
    changeStyle() {
      this.fontStyle.color = 'red'
    }
  }
}
</script>
