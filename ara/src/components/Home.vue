<template lang="html">
  <div class="app">
    <navbar/>
    <div class="main">
      <div class="columns is-multiline">
        <div class="column is-half">
          <h2 class="title"> 오늘 화제 </h2>
          <table class="table is-narrow">
            <tbody>
              <router-link v-for="n in 5" tag="tr" to="article">
                <td> 추천 </td>
                <td> 글 제목이 길ㅇ {{n}} </td>
                <td class="has-text-right"> 날짜 </td>
              </router-link>
            </tbody>
          </table>
        </div>
        <div class="column is-half">
          <h2 class="title"> 이번 주 화제 </h2>
          <table class="table is-narrow">
            <tbody>
              <router-link v-for="n in 5" tag="tr" to="article">
                <td> 추천 </td>
                <td> 글 제목이 길ㅇ {{n}} </td>
                <td class="has-text-right"> 날짜 </td>
              </router-link>
            </tbody>
          </table>
        </div>
        <div class="column is-half" v-for="m in 10">
          <h2 class="title"> 게시판 {{ m }} </h2>
          <table class="table is-narrow">
            <tbody>
              <router-link v-for="n in 5" tag="tr" to="article">
                <td> 글 제목 {{n}}  </td>
                <td class="has-text-right"> 2017-04-{{30-n}} </td>
              </router-link>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  methods: {
    toggleMenu () {
      this.menu = !this.menu
    }
  },
  data: function () {
    return {
      menu: false
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="css" scoped>
.main {
  max-width: 45em;
  padding: 3em 2em;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .main {
    padding: 2em 1em;
  }
}


</style>
