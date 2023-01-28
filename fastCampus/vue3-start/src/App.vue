<template>
  <h1> {{ count }} </h1>
</template>

<script>
export default {
  data() {
    return {
      count: 2
    }
  },
  // 컴포넌트가 생성되기 직전에 실행 됨 (데이터 정의 전)
  beforeCreate() {
    console.log("Before Create!!", this.count)
  },
  // 컴포넌트가 생성된 직후에 실행 됨
  created() {
    console.log("Created!!", this.count)
    // 컴포넌트가 생성된 직후기 때문에 html 연결되어 있지 않아서 조회 불가능
    console.log(document.querySelector('h1'))
  },
  // html과 연결되기 전이기 때문에 html 구조 조회 불가능
  beforeMount() {
    console.log("Before Mount!!")
    console.log(document.querySelector('h1'))
  },
  // 실제 컴포넌트가 html 구조에 연결되어져 있음
  // 따라서 html 구조를 조회해서 출력 가능
  mounted() {
    console.log("Mounted!!")
    console.log(document.querySelector('h1'))
  }
}
</script>
