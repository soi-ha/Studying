<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text" 
      placeholder="Search for Movies, Series $ more" 
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name == 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: '10',
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series','episode']
        },
        {
          name: 'number',
          items: [10,20,30]
        },
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear()
            for (let i = thisYear; i >= 1985; i -= 1) {
              years.push(i)
            }
            return years
          })()
        }
      ]
    }
  },
  methods: {
    async apply() {
      // 영화검색 기능, movie.js로 데이터가 넘어감
      this.$store.dispatch('movie/searchMovies', { 
        // 여기서 movie는 모듈 movie임. 
        // index.js에서 movie 모듈을 hello 이름으로 설정했다면, 여기서도 movie가 아닌 hello라고 작성해야 함.
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

  .container {
    display: flex;
    > * { // .container의 모든 자식요소를 의미
      margin-right: 10px;
      font-size: 15px;
      &:last-child { // 자식요소들 중의 마지막 자식요소
        margin-right: 0;
      }
    }
    .selects {
      display: flex;
      select {
        width: 120px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .btn {
      width: 120px;
      height: 50px;
      font-weight: 700;
      flex-shrink: 0;
    }
    @include media-breakpoint-down(lg) {
      display: block; // 수평에서 수직으로 변경
      input {
        margin-right: 0;
        margin-left: 10px;
        margin-bottom: 10px;
      }
      .selects {
        margin-right: 0;
        margin-left: 10px;
        width: 100%;
        select {
          width: 100%;
        }
      }
      .btn {
        width: 100%;
        margin-left: 10px;
        margin-top: 10px;
      }
    }
  }
</style>