<template>
  <button @click="handler">
    Click me!
  </button>
  <ul>
    <li
      v-for="fruit in newFruits"
      :key="fruit.id">
      {{ fruit.name }}-{{ fruit.id }}
    </li>
  </ul>
</template>

<script>
import shortid from 'shortid'

export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry'],
      // newFruits: [
      //   { id: 0, name: 'Apple' },
      //   { id: 1, name: 'Banana' },
      //   { id: 2, name: 'Cherry' }
      // ]
    }
  },
  computed: {
    newFruits() {
      return this.fruits.map(fruit => ({
        id: shortid.generate(),
        name: fruit
      }))
    }
  },
  methods: {
    handler() {
      this.fruits.push('Orange')
    }
  }
}
</script>
