<template>
  <div class="container">
    <input
      v-model="title"
      type="text" 
      placeholder="Search for Movies, Series $ more" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  }
}
</script>