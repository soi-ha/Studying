<template>
  <MyBtn>Banana</MyBtn>
  <MyBtn
    :color="color">
    Apple
  </MyBtn>
  <MyBtn
    large
    color="royalblue">
    Orange
  </MyBtn>
  <MyBtn>Cherry</MyBtn>
</template>

<script>
import MyBtn from '~/components/MyBtn'

export default {
  components: {
    MyBtn
  },
  data() {
    return {
      color: '#000'
    }
  }
}
</script>
